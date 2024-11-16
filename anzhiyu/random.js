var posts=["1970/01/01/00new/","2024/11/12/0待办/","2024/11/11/1helloworld/","2024/11/11/2Front-matter/","2023/06/01/3主题标签/","2024/11/13/6获取网站icon的方法/","2024/11/12/4Markdown颜色列表/","2024/11/13/5jike/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };