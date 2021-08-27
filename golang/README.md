
# Goの基本文法

```go
// 任意のpackageを読み込む必要がある
package main
// I/O package
import "fmt"
// 処理はmain関数内で実施する必要がる
func main() {
	fmt.Println("Hello, world")
}
```

## 変数
小文字はローカル変数、大文字はグローバル変数となる

goは型指定が後置方式となる点にも注意

```go
func main() {
    var msg string
    msg = "hoge"
    // msg := "hoge"
    var (
        a string
        i int
    )
    a = "fuga"
    i = 3
    x, y := 10, 20
}
```
セイウチ演算子(:=)は、宣言と代入が同時にできる

### データ型
- string  "hello" // ""のみ
- int     10
- float64 3.14
- bool    true, false
- nil

### 定数
```go
func main() {
    const name = "hitoe"
    const (
        sun = iota // 0
        mon // 1
        tue // 2
    )
}
```

### ポインタ
ポインタとは、変数のアドレスを表す

```go
func main() {
	a := 5
	var pa *int // *typeでポインタ型を生成
	pa = &a // &xでxのポインタを取得
	// *pa = paに格納されているデータ

	fmt.Println(pa)
	fmt.Println(*pa) // pa = &a, *pa = a
}
```

## 関数

```go
func hello(name string) string {
	fmt.Printf("hello " + name + "\n")
	return name
}

func main() {
	a := hello("hitoe")
	fmt.Printf(a)
}

// 戻り値が2変数
func swap(a,b int) (int, int) {
    return b, a
}

// 即時関数
func(name string) {
    fmt.Printf("hello" + name)
}("hitoe")
```

## 配列(array)

C言語のようにarrayを指定するとa[0]のポインタを指定したりはしない

```go
func main() {
	var a1 [5]int // 5つ分のint変数を格納
	fmt.Println(a1)
	a2 := [3]int{1, 3, 5}
	fmt.Println(a2)
	a3 := [...]int{2, 4, 6, 8} // 要素数を省略
	fmt.Println(a3)
	fmt.Println(len(a3)) // 要素の数
}
```

### スライス

値渡し(copy)ではなく、**参照渡し**(share)になる

```go
func main() {
	a := [5]int{1, 3, 5, 7, 9}
	s := a[2:4] // 参照渡し
	fmt.Println(s)

	s := []int{1, 3, 5} // []にデータを入れなくればスライスになる
	// s := make([]int, 3) // [0,0,0,]

	s = append(s, 7, 9)
	fmt.Println(s)

	c := make([]int, len(s))
	copy(c, s) // return len(c)
	fmt.Println(c)
}
```

## 連想配列(map)

```go
func main() {
	m1 := make(map[string]int) // [key]value
	m1["head"] = 10
	m1["body"] = 20
	m2 := map[string]int{"a": 1, "b": 2}
	fmt.Println(m1, m2) // valueの型に合わせる
	fmt.Println(len(m1))

	// delete
	delete(m1, "head")

	// exist
	v, e := m1["body"]
	fmt.Println(v)
	fmt.Println(e) // return bool
}
```

## 制御フロー

### if 条件分岐
```go
func main() {
	height := 167

	if height > 165 {
		fmt.Printf("good !")
	} else if height > 170 {
		fmt.Printf("great !!")
	} else {
		fmt.Printf("so so")
	}
}
```

### switch 条件分岐
```go
func main() {
	signal := "blue"
	switch signal {
	case "blue":
		fmt.Printf("go")
	case "yellow":
		fmt.Printf("attention")
	case "red":
		fmt.Printf("stop")
	}

	height := 167
	switch {
	case height > 165:
		fmt.Printf("good !")
	case height > 170:
		fmt.Printf("great !!")
	default:
		fmt.Printf("so so")
	}
}
```

### for 繰り返し
goではwhileがないので注意

```go
func main() {
	for i := 0; i < 10; i++ {
		if i == 3 {
			continue
		}
		fmt.Println(i)
	}

	// while
	j := 0
	for j < 5 {
		fmt.Println(j)
		j++
	}

	// 無限ループ
	k := 0
	for {
		fmt.Println(k)
		k++
		if k == 7 {
			break
		}
	}
}
```





