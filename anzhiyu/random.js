var posts=["1970/01/01/00new/","2024/11/12/0待办/","2024/11/11/1helloworld/","2024/11/11/2Front-matter/","2024/11/12/4Markdown颜色列表/","2024/11/13/5jike/","2023/06/01/3anzhiyu主题标签/","2024/11/13/6获取网站icon的方法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };