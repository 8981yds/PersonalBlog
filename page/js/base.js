var randomTags = new Vue({
    el: "#random_tags",
    data: {
        tags: ["alkjg","lakjfel","ekwjkj","klewjg","kewjkfj","jeklslkjf","lakjfel","ekwjkj","klewjg","kewjkfj","jeklslkjf","lakjfel","ekwjkj","klewjg","kewjkfj","jeklslkjf"]
    },
    computed: {
        randowColor: function(){
            return function(){
                var red = Math.random()*255;
                var green =Math.random()*255;
                var blue = Math.random()*255;
                return "rgb(" + red + "," + green + "," + blue + ")"
            }
        },
        randomSize:function(){
            return function(){
                var size = (Math.random()*20+12) + "px";
                return size;
            }
        }
    },
    created: function(){

    }
});

var newHot = new Vue({
    el:"#new_hot",
    data:{
        titleList:[
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
            {title:"这是一个链接",link:"http://www.baidu.com"},
        ]
    }
});

var newComments = new Vue({
    el:"#new_comments",
    data:{
        commentList: [
            {name:"这里是用户名",data:"2018-10-10",comment:"这里是一大段文字---------"},
            {name:"这里是用户名",data:"2018-10-10",comment:"这里是一大段文字---------"},
            {name:"这里是用户名",data:"2018-10-10",comment:"这里是一大段文字---------"},
            {name:"这里是用户名",data:"2018-10-10",comment:"这里是一大段文字---------"},
            {name:"这里是用户名",data:"2018-10-10",comment:"这里是一大段文字---------"},
            {name:"这里是用户名",data:"2018-10-10",comment:"这里是一大段文字---------"},
            {name:"这里是用户名",data:"2018-10-10",comment:"这里是一大段文字---------"},
            {name:"这里是用户名",data:"2018-10-10",comment:"这里是一大段文字---------"},
            {name:"这里是用户名",data:"2018-10-10",comment:"这里是一大段文字---------"},
            {name:"这里是用户名",data:"2018-10-10",comment:"这里是一大段文字---------"},
            {name:"这里是用户名",data:"2018-10-10",comment:"这里是一大段文字---------"},
            {name:"这里是用户名",data:"2018-10-10",comment:"这里是一大段文字---------"},
            {name:"这里是用户名",data:"2018-10-10",comment:"这里是一大段文字---------"},
        ]
    }
});