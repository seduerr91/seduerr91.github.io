#!/usr/bin/env ruby

require "fileutils"
require "json"
require "yaml"

source_dir = File.expand_path("../assets/books", __dir__)
output_dir = File.expand_path("../_books", __dir__)
catalog_path = File.join(source_dir, "catalog.json")
genres_path = File.expand_path("../_data/book_genres.yml", __dir__)
move_sources = ARGV.delete("--move")

unless ARGV.empty?
  warn "Usage: ruby scripts/import_book_summaries.rb [--move]"
  exit 1
end

catalog = JSON.parse(File.read(catalog_path))
genre_by_slug = YAML.safe_load(File.read(genres_path)).fetch("books")
FileUtils.mkdir_p(output_dir)
imported_count = 0

catalog.fetch("books").each do |book|
  source_path = File.join(source_dir, book.fetch("summary_file"))
  output_path = File.join(output_dir, "#{book.fetch('slug')}.md")

  next unless File.file?(source_path)

  source = File.read(source_path)
  hook_match = source.match(/^## Hook\s*$\n+(.*?)(?=^## Overview\s*$)/m)
  summary_match = source.match(/^## Summary\s*$\n+(.*?)(?=^## Key ideas\s*$)/m)
  raise "Missing Hook section in #{source_path}" unless hook_match
  raise "Missing Summary section in #{source_path}" unless summary_match

  description = book["brief"].to_s.strip
  if description.empty? || description == "No brief stored"
    description = "A book summary of #{book.fetch('title')} by #{book.fetch('author')}."
  end
  hook = hook_match[1].strip.gsub(/\s+/, " ")
  hook = description if hook == "_No hook is stored._"
  summary = summary_match[1].strip
  summary = description if summary.empty?
  content = "## Summary\n\n#{summary}\n"
  cover = book["cover_url"].to_s

  fields = {
    "title" => book.fetch("title"),
    "book_author" => book.fetch("author"),
    "genre" => genre_by_slug.fetch(book.fetch("slug")),
    "brief" => book["brief"].to_s == "No brief stored" ? "" : book["brief"].to_s,
    "hook" => hook,
    "description" => description,
    "cover" => cover,
    "image" => cover.empty? ? "/assets/seb-caricature.jpeg" : cover,
    "reading_time_minutes" => book["reading_time_minutes"],
    "summary_updated_at" => book["summary_updated_at"].to_s
  }

  front_matter = fields.map do |key, value|
    rendered = value.is_a?(Numeric) ? value.to_s : JSON.generate(value)
    "#{key}: #{rendered}"
  end.join("\n")

  File.write(output_path, "---\n#{front_matter}\n---\n\n#{content}")
  File.delete(source_path) if move_sources
  imported_count += 1
end

puts "Imported #{imported_count} book summaries into #{output_dir}"
