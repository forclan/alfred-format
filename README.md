# alfred 插件, 用于美化copyboard中的代码

有时候需要将代码进行复制, 但很多时候由于编辑器等原因导致代码的格式是错误的,又或者是代码是服务器返回的一段结果。
这些都导致代码难以阅读。

于是我就写了这个插件, 使用[js-beautify](https://www.npmjs.com/package/js-beautify)对粘贴板中的数据进行美化。

## 使用方法: alfred 安装Beaftify Content In Clipboard.alfd

- cmd+c将想要格式化的内容复制到剪贴板中
- cmd+shift+p执行alfred脚本
- cmd+v粘贴内容

## 效果
美化前:
```js
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:thi
```

美化后:
```js
! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : thi
```