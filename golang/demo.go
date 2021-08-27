package main

import "fmt"

func hello(name string) string {
	fmt.Printf("hello " + name + "\n")
	return name
}

func main() {
	a := hello("hitoe")
	fmt.Printf(a)
}
