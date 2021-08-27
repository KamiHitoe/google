
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


