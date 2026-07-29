---
title: "Project FridgeLog: The Privacy-Preserving Smart Fridge I Want to Build"
tags: [AI, IoT, Engineering, Personal]
style: fill
color: success
description: "A low-key smart-fridge idea: battery-friendly camera nodes, a small server, and a privacy-first inventory system that knows what is in the fridge."
---

# Project FridgeLog: The Privacy-Preserving Smart Fridge I Want to Build

I want to build a fridge inventory system that is useful enough to check from my phone, simple enough to prototype at home, and private enough that it does not feel like I installed a surveillance product in my kitchen.

The core idea is straightforward:

- a few tiny devices in or near the fridge
- event-driven snapshots instead of continuous video
- a small server that keeps the inventory state
- a web service that can call the Cerebras API for item recognition and structured updates

The dream outcome is very practical:

- I can check what is in the fridge while shopping
- I can see what was added or removed
- I can get reminders before things expire
- I can stop buying the same yogurt three times because I forgot it was already in there

This is still a future side project, not something I am actively building this week. But after researching the hardware and a few existing approaches, I think a low-key prototype is very doable.

## What I Actually Want This System To Do

The product requirement is not "perfect computer vision."

It is:

- good enough inventory awareness
- low maintenance
- minimal power draw
- no always-on cloud camera feed

That changes the design quite a lot.

I do **not** want four cameras streaming video all day and a giant inference stack running continuously just to figure out whether I moved some cheese.

I want a system that mostly sleeps, wakes up when the fridge opens, captures a few images, updates state, and goes quiet again.

## What Existing Smart Fridges and Research Suggest

Commercial systems already point in the right direction, but they also show the limitations.

Samsung's [AI Vision Inside](https://www.samsung.com/us/explore/family-hub-refrigerator/overview/) is the clearest mainstream example. As of its current public description, it can automatically label `37` unobscured fresh food items, while other items still need manual labeling. That is useful, but also a reminder that fridge recognition remains messy when objects are blocked, stacked, bagged, or hidden in door bins.

Research points in a similar direction:

- camera-only systems can work, and even a single webcam can be enough for a low-cost prototype
- weight-sensor systems are good at detecting incremental consumption
- RFID systems can automate inventory, but fridges are awkward RF environments because of metal, liquids, and packaging

In other words, the best design is probably **hybrid**, not ideological.

## The Privacy-Preserving Version I Actually Want

My version should follow a few rules:

### 1. No continuous live stream

The cameras should only capture stills or short bursts when the fridge door opens.

### 2. API keys never live on the device

The Cerebras docs are explicit that API keys should not be embedded in client-side applications and should be kept server-side. So the fridge hardware should talk only to my own service, and that service should call Cerebras.

### 3. Store state, not just images

The system is not useful if it only saves photos. It needs an actual inventory model:

- item name
- confidence
- estimated quantity
- date first seen
- date last seen
- optional expiration date
- optional barcode

### 4. Be honest about what AI can and cannot infer

For version one, I do **not** think "what has gone bad" should mean visual spoilage detection from fridge snapshots.

That is much harder than it sounds.

What I do think is realistic:

- estimate age based on when an item was first seen
- let me scan packaged foods with barcodes
- let me attach expiration dates manually or semi-automatically
- remind me when leftovers have been around too long

That already solves a big part of the problem.

## Which Hardware Is Actually Enough

This was the most useful part of the research.

### Your Existing `XIAO nRF52840`

The [Seeed Studio XIAO nRF52840](https://wiki.seeedstudio.com/XIAO_BLE/) is a nice low-power board, but it is not the right main compute board for a Wi-Fi fridge camera node.

It gives you:

- Bluetooth Low Energy and NFC
- very low standby power
- lithium battery charging support

But it does **not** give you Wi-Fi.

So I would use it for one of these jobs instead:

- a battery-friendly door sensor node
- a BLE trigger/beacon
- a small external controller for a barcode or NFC workflow

I would **not** make it the main imaging node.

### The Best Inside-Fridge Camera Node: `XIAO ESP32-S3 Sense`

The [XIAO ESP32-S3 Sense](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/) is much closer to what this project needs.

It has:

- `2.4GHz` Wi-Fi
- BLE
- a built-in camera option
- `8MB` PSRAM and `8MB` flash
- MicroPython and Arduino support
- deep sleep modes with very low power draw
- microSD support on the Sense setup

That is enough for:

- capturing JPEG snapshots
- saving a local fallback copy to microSD
- posting images to a local server
- sleeping most of the time

For a low-key prototype, this is the most attractive board family.

### When a Raspberry Pi Actually Makes Sense

A [Raspberry Pi Zero 2 W](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/) is small but still much more like a real computer than a microcontroller:

- `1GHz` quad-core CPU
- `512MB` RAM
- Wi-Fi
- CSI camera connector

I would only pull in a Pi if I want one of these:

- local computer-vision pre-processing outside the fridge
- a USB barcode scanner
- a local web dashboard
- Home Assistant integration
- multiple camera nodes managed by one small hub

So my answer is:

- **No, you do not need a Raspberry Pi for the camera nodes**
- **Yes, a Raspberry Pi can be useful as the outside-the-fridge coordinator**

If I already had a mini PC, NAS, or always-on home server, I would probably use that instead of buying a Pi.

## The Cold and Battery Problem

This part matters more than the AI.

Electronics in a fridge are not mainly threatened by low temperature. They are threatened by:

- condensation
- awkward power management
- weak Wi-Fi through a metal enclosure
- battery behavior in cold conditions

For rechargeable lithium cells, the key constraint is often **charging temperature**, not just discharge temperature. A representative Li-ion datasheet from Molicel allows discharge far below fridge temperature, but charges only from `0C` upward. That means a fridge is not automatically unsafe for battery discharge, but in-fridge charging is something I would avoid unless I was very sure about the cell, the thermal environment, and the enclosure.

My practical recommendation:

- let inside nodes run from replaceable batteries or a removable rechargeable pack
- do not charge batteries inside the fridge
- keep any heavier compute and charging electronics outside the fridge

If I wanted to be extra conservative, I would keep the battery outside the fridge and run a thin power cable through the door gasket.

## The Best Trigger: Light or Door?

You mentioned only activating when the fridge light is on.

That is a good instinct, and I think there are two viable triggers:

### Option 1: Ambient Light Sensor

Pros:

- simple
- no need to modify the fridge

Cons:

- could be fooled by room light
- slightly less deterministic

### Option 2: Magnetic Reed Switch on the Door

Pros:

- more deterministic
- no computer vision required to know the fridge opened

Cons:

- slightly more installation work

My preference is actually **both**:

- reed switch tells the system the door opened
- light sensor confirms that the interior light is on
- camera wakes only when both conditions look right

## The Architecture I Would Build

This is the version I think has the best effort-to-usefulness ratio.

### Inside the Fridge

- `1-2` XIAO ESP32-S3 Sense nodes in corners
- each normally asleep
- each wakes on door-open/light event
- each captures a still image
- each sends a JPEG to the local service

I would **not** start with `3-4` cameras.

That may become phase two, but version one should prove the whole loop with one camera first, then two if occlusion is a real problem.

### Outside the Fridge

- a small server on a Pi Zero 2 W, old mini PC, or home server
- a small database
- optional USB barcode scanner
- optional BLE or GPIO bridge for the door sensor

### In the Cloud or Server-Side AI Layer

The service can call the [Cerebras API](https://inference-docs.cerebras.ai/quickstart) using a server-side API key. Cerebras currently supports image inputs in public preview for `gemma-4-31b`, which makes it a reasonable candidate for image-based item recognition. For pure text cleanup and inventory reconciliation, their production text models are also an option.

The important boundary is:

- device sends image to my service
- my service sends only what it chooses to Cerebras
- the API key never touches the device

## The Hybrid Add-On I Like Most: A Barcode Scanner Outside the Fridge

This may sound less elegant than pure vision, but it is probably one of the highest-value additions.

Barcode scanning solves a different part of the problem:

- cereal boxes
- yogurt packs
- sauces
- milk cartons
- packaged meat

It does **not** solve:

- leftovers
- produce
- half-used ingredients
- unlabeled containers

That is why I like it as an addition, not a replacement.

If I were building this for real, I would combine:

- vision for placement and retrieval
- barcode for packaged items
- manual correction UI for the hard cases

That is much more robust than betting everything on one modality.

## The Low-Key Prototype I Would Start With

Here is the version I think is realistic and fun.

### Version 1

- `1` XIAO ESP32-S3 Sense inside the fridge
- `1` reed switch or light-trigger input
- `1` outside server
- no live stream
- still images only
- simple inventory UI

Workflow:

1. Door opens
2. Trigger wakes the camera node
3. Camera takes one image near open and one image near close
4. Images are uploaded to the server
5. Server compares new frames against prior state
6. Server asks Cerebras for a structured guess: items added, removed, unchanged, uncertain
7. Inventory database updates
8. Phone UI shows current fridge state

### Version 2

- add a second camera for better coverage
- add an external barcode scanner
- add item history and expiration reminders

### Version 3

- add load cells under one shelf or tray
- estimate quantity changes for milk, eggs, or drinks
- use the weight signal as extra evidence for ambiguous vision events

## The Minimal Parts List I Would Buy

For the first useful prototype:

- `1-2` Seeed Studio XIAO ESP32-S3 Sense boards
- `1-2` matching camera modules
- `1` light sensor or magnetic reed switch
- `1` small external antenna setup if Wi-Fi reception is poor
- `1` Raspberry Pi Zero 2 W only if I do not already have a home server
- battery pack or external power solution
- small enclosure plus desiccant
- optional USB barcode scanner

And from my existing pile:

- the `XIAO nRF52840` could still be useful as a low-power sensor helper

## The Software Stack I Would Use

I would keep the software boring.

### On the Device

- MicroPython or Arduino
- deep sleep by default
- wake on trigger
- capture JPEG
- POST to local API

### On the Server

- a tiny Python or Go service
- SQLite or Postgres
- object storage for snapshots
- event log table
- inventory table

### Cerebras Usage

- vision-capable model for image understanding
- structured JSON output for inventory diffs
- text model for cleanup, summaries, and notifications

Example tasks for the server:

- "Compare previous and current fridge snapshots"
- "Return added_items, removed_items, uncertain_items"
- "Estimate which items likely need manual confirmation"
- "Summarize what is expiring in the next three days"

## The Biggest Design Choice

The biggest choice is not ESP32 versus Raspberry Pi.

It is whether the system tries to be:

- fully automatic and fragile

or

- mostly automatic and easy to live with

I strongly prefer the second one.

If the system gets `80%` of the way there and makes correction easy, that is already valuable. A brittle "fully automatic" system that constantly mislabels groceries is much less interesting.

## What I Would Build First

If I make time for this, I would do exactly this:

1. Use one `XIAO ESP32-S3 Sense` inside the fridge.
2. Trigger it with a reed switch or light sensor.
3. Send still images to a tiny local API.
4. Keep the Cerebras key on the server only.
5. Build a dead-simple fridge inventory page.
6. Add barcode scanning only after the vision loop works.

That feels like the right low-key prototype.

It is small enough to finish, private enough to feel good about, and useful enough that I would actually check it while standing in a grocery store wondering whether I already bought eggs.
