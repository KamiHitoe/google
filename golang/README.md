
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


