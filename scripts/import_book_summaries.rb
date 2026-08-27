#!/usr/bin/env ruby

require "fileutils"
require "json"

source_dir = File.expand_path("../assets/books", __dir__)
output_dir = File.expand_path("../_books", __dir__)
catalog_path = File.join(source_dir, "catalog.json")
move_sources = ARGV.delete("--move")

unless ARGV.empty?
  warn "Usage: ruby scripts/import_book_summaries.rb [--move]"
  exit 1
end

catalog = JSON.parse(File.read(catalog_path))
FileUtils.mkdir_p(output_dir)
imported_count = 0

catalog.fetch("books").each do |book|
  source_path = File.join(source_dir, book.fetch("summary_file"))
  output_path = File.join(output_dir, "#{book.fetch('slug')}.md")

  next unless File.file?(source_path)

  source = File.read(source_path)
  content_start = source.index(/^## Brief\s*$/)
  raise "Missing Brief section in #{source_path}" unless content_start

  content = source[content_start..]
  content = content.sub(/\A## Brief\s*\n+.*?(?=^## Hook\s*$)/m, "")
  description = book["brief"].to_s.strip
  if description.empty? || description == "No brief stored"
    description = "A book summary of #{book.fetch('title')} by #{book.fetch('author')}."
  end
  cover = book["cover_url"].to_s

  fields = {
    "title" => book.fetch("title"),
    "book_author" => book.fetch("author"),
    "brief" => book["brief"].to_s == "No brief stored" ? "" : book["brief"].to_s,
    "description" => description,
    "cover" => cover,
    "image" => cover.empty? ? "/assets/seb-caricature.jpeg" : cover,
    "keytakes_url" => book["book_url"].to_s,
    "reading_time_minutes" => book["reading_time_minutes"],
    "summary_updated_at" => book["summary_updated_at"].to_s
  }

  front_matter = fields.map do |key, value|
    rendered = value.is_a?(Numeric) ? value.to_s : JSON.generate(value)
    "#{key}: #{rendered}"
  end.join("\n")

  File.write(output_path, "---\n#{front_matter}\n---\n\n#{content.lstrip}")
  File.delete(source_path) if move_sources
  imported_count += 1
end

puts "Imported #{imported_count} book summaries into #{output_dir}"
