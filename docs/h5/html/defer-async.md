# defer 和 async 的区别
#### 什么是DOMContentLoaded和load事件
[DOMContentLoaded、load讲解](https://www.jianshu.com/p/84fa44e552d8)

有兴趣看原文，这里不加赘述。  
> 简单来说DOMContentloaded是页面中的DOM元素解析完成时，而load是内嵌资源(一些图片、视屏需要网络的元素)加载完成时触发
#### defer和async
[浅谈async和defer](http://chuansong.me/n/1701969051829)  

* 普通
> 文档解析的过程中，如果遇到script脚本，就会停止页面的渲染进行下载（但是并不会影响后续的解析，解析和渲染是两码事儿）。
资源的下载是在解析过程中进行的，虽说script1脚本会很快的加载完毕，但是他前边的script2并没有加载&执行，所以他只能处于一个挂起的状态，等待script2执行完毕后再执行。
当这两个脚本都执行完毕后，才会继续渲染页面。  

![image](https://user-images.githubusercontent.com/9568094/31621391-39849b1a-b25f-11e7-9301-641b1bc07155.png)
* defer
> 文档解析时，遇到设置了defer的脚本，就会在后台进行下载，但是并不会阻止文档的渲染，当页面解析&渲染完毕后。
会等到所有的defer脚本加载完毕并按照顺序执行，执行完毕后会触发DOMContentLoaded事件。

![image](https://user-images.githubusercontent.com/9568094/31621324-046d4a44-b25f-11e7-9d15-fe4d6a5726ae.png)
* async
> async脚本会在加载完毕后执行。
async脚本的加载不计入DOMContentLoaded事件统计，也就是说下图两种情况都是有可能发生的

![image](https://user-images.githubusercontent.com/9568094/31621170-b4cc0ef8-b25e-11e7-9980-99feeb9f5042.png)
![image](https://user-images.githubusercontent.com/9568094/31622216-6c37db9c-b261-11e7-8bd3-79e5d4ddd4d0.png)
#### 总结
* 如果你的脚本需要依赖Dom元素（文档是否渲染完毕）， 或者被其他脚本文件依赖，推荐使用defer

* 如果你的脚本并不关心Dom元素，并且he其他脚本没有依赖关系，那么推荐使用async