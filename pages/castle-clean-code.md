---
title: Clean Code
tags: [Mental Castle]
style: fill
color: primary
description: My flat in Wuerzburg
---

## `Flat`: Meaningful names

- `Bed`: Use intention-revealing names: e.g., elapsedTimeinDays = 6
- `Shirts`: Avoid disinformation: grouping of accounts shouldn't refer to AccountsList
- `Big Robe`: Make meaningful distinctions: use source and target, don't use noise words, don't use variable, list
- `Window`: Use pronounceable names: dtarcrd > datarecord
- `Kitchen`: Use searchable names: Work_Days_Per_Week = 5
- `Fridge`: Avoid mental mapping: i, j,k is fine, not more tho
- `Stove`: Class names: should have noun phrase like Customer
- `Window`: Method names: should be a verb or verb phrase like createAccount
- `Bathroom`: Pick one per concept: instead of get/retrieve/fetch only use get if same concept
- `Toilet`: Use solution domain: use computer science, ML terms
- `Stand`: Use problem domain: use problem space if you don't have terms
- `Shower`: Add meaningful context: create a class Address for street, state, name, firstName

## `Living Room`: Functions

- `Couch`: Small: 20-30 lines
- `Vitrine`: Blocks: code within if/else/while should be one line long
- `Glasstable`: Do one thing: if you can extract a sub-function with a diff name, you do more
- `Desk`: Arguments: 
  - `Screen`: Monadic: fileExists('file.csv')
  - `Laptop`: Flag arguments: don't pass bool values
  - `Chair/Mouse`: Dyadic/Triads: try to avoid
  - `Keyboard`: Objects: reduce number by creating objects
- `Drawers`: Command-Query separation: should either do something or answer something
- `Pinwall`: Extract try-catch blocks: outsource to own funcs
- `Door`: Don't repeat yourself: bloats code & creates spaces for errors
  
## `Hallway` Comments

- `Neighbor`: Don't comment on bad code.
- `4 Stairs`: Explain yourself in code: if(employee.isElligibleForFullBenefits())
- `Postbox`: Good comments: 
- `Garage`: legal comments: copyright, authorship
- `Bicycle`: informative comments: explaining regex
- `Sporthalle`: explanation of intent
- `Sports grounds`: warning of consequences: Don't run until you want to wait
- `Japanese Carden`: ToDo comments
- `Deutschhaus`: Avoid nonlocal info: put comment to place where it happens
