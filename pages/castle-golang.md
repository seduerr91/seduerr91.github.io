---
title: Golang Basics
tags: [Mental Castle]
style: fill
color: danger
description: Snoqualmie to work
---

Drive from Snoqualmie Home in Woodlands to Bellevue.

- `Garage`: types: char, string, bool, numeric
- `our car`: constants: const size int64 = 1024
- `Neighbour car`: variables: var msg string = "Hi world"
- `Safeway path`: shortcut: msg := "hi" 
- `Crossing`: string: str := "hi", str := `Hi` // multiline
- `Swenson Drive`: number: num := 3, var num float32 = 22.7
- `Traffic light`: array: nums := [3]int{1, 2, 4} // fixed length
- `Parkway`: slice: nums := []int{1, 2, 4} // variable length
- `Jacobia`: pointer: p := &i (p points to i's memory location); i = *p (read i through pointer p)
- `30 zone`: conditional: if day == "sun" { rest() } else if day == "mo" { start() } else { work() }
- `hospital`: statements in if: if _, err := doThing(); err != nil {fmt.Println("Oh!")}
- `I90 ramp`: conversions: f := float(3)
- `ramp lights`: switch: switch day {case "sun": fallthrough case "sa": rest() default: work() }
- `I90`: for loop: for count := 0; counter <= 10; count++ {do(count)}
- `Preston`: for range loop: entry := []str{"A", "B"}: for i, val := range entry{(i, val)}
- `High Point`: while: n := 0; x := 42; for n != x{ n := guess() }
- `Highlands`: lambdas: myFunc := func() bool {return x > 10}
- `Downtown`: multiple return values: a,b, := getMsg() (a string, b string){return "hi", "u"}
- `Best Buy`: named return values: func split(sum int) (x, y int) { x=sum; y=sum-1; return }
- `REI HQ`: importing: import "fmt"
- `Lake Sammamish`: aliases: import r "math/rand"
- `Lakemont`: package: package hello // every file starts with package
- `Eastgate`: exporting names: begin w/ capital letter e.g., fmt.Println("hi")
- `405`: goroutine: channels are concurrency safe
- `Bellevue Way Ramp`: buffered channels: limit a channel's amount
- `Lightrail`: closing channels: v, ok <- ch // closed if ok == false
- `Bellevue Way`: waitgroup: waits for goroutine to finish
- `Outer route`: defer: skips running function until outer func runs // @decorator in Python 
- `112th`: defer func(){fmt.Println("Done")} () fmt.Println("Working") 
- `929`: structs: v := Vertex{x:1, y:2} // dict-ish 
- `boom gate`: receivers: func (v Vertex) Abs() float {...}; v.Abs() // def input name return
- `parking`: mutations: func (v *Vertex) Scale (f float) {...}; v.Scale(.5) // mutation by def receiver as pointer
- `door`: interface: type Shape interface {Area() float64}
  - `walk`: method: func (r Rectangle) Area() float64 {return r.Length * r.Width}
  - `stairs`: struct: type Rectangle struct {length, width float64} // implements shape
- `elevator`: var r Shape = Rectangle{length:3, width:4}; fmt.Println(r.Area()) // 12 