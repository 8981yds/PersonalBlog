// import { axios } from "./axios";

var everyDay = new Vue({
    el:"#every_day",
    data:{
        content:"helloworldword1"
    },
    computed:{
        getContent:function(){
            return this.content;
        }
    },
    created:function(){
        //请求数据，给content赋值
        axios({
            method:"get",
            url:"/queryEveryDay"
        }).then(function(resp){
            everyDay.content = resp.data.data[0].content;
            // console.log();
        }).catch(function(resp){
            console.log("请求失败");
        });
    }
});

var articleList = new Vue({
    el: "#article_list",
    data:{
        articleList:[
            {title:"Windows下使用zerotier时提示PORT_ERROR错误",
            content:"ZeroTier是一款基于P2P的内网穿透工具,对于个人免费且支持最多100台设备端对端穿透，看上去很优秀。出于爱折腾的兴趣，就安装试用一下。首先在官网注册帐号并创建一个虚拟网，得到虚拟网ID。然后下载Windows安装包，在Windows上一路确定安装完毕，点击运行，右键托盘图标选择join，填写上新建的虚拟网ID，进行加入。加入后点击”show networks”查看网络状态，发现Status为&...",
            data:"2018-10-10",
            views:"101",
            tags:"test1 test2",
            id:"1",
            link:""
        },
              {title:"Windows下使用zerotier时提示PORT_ERROR错误",
            content:"ZeroTier是一款基于P2P的内网穿透工具,对于个人免费且支持最多100台设备端对端穿透，看上去很优秀。出于爱折腾的兴趣，就安装试用一下。首先在官网注册帐号并创建一个虚拟网，得到虚拟网ID。然后下载Windows安装包，在Windows上一路确定安装完毕，点击运行，右键托盘图标选择join，填写上新建的虚拟网ID，进行加入。加入后点击”show networks”查看网络状态，发现Status为&...",
            data:"2018-10-10",
            views:"101",
            tags:"test1 test2",
            id:"1",
            link:""
        },
              {title:"Windows下使用zerotier时提示PORT_ERROR错误",
            content:"ZeroTier是一款基于P2P的内网穿透工具,对于个人免费且支持最多100台设备端对端穿透，看上去很优秀。出于爱折腾的兴趣，就安装试用一下。首先在官网注册帐号并创建一个虚拟网，得到虚拟网ID。然后下载Windows安装包，在Windows上一路确定安装完毕，点击运行，右键托盘图标选择join，填写上新建的虚拟网ID，进行加入。加入后点击”show networks”查看网络状态，发现Status为&...",
            data:"2018-10-10",
            views:"101",
            tags:"test1 test2",
            id:"1",
            link:""
        },
          {title:"Windows下使用zerotier时提示PORT_ERROR错误",
            content:"ZeroTier是一款基于P2P的内网穿透工具,对于个人免费且支持最多100台设备端对端穿透，看上去很优秀。出于爱折腾的兴趣，就安装试用一下。首先在官网注册帐号并创建一个虚拟网，得到虚拟网ID。然后下载Windows安装包，在Windows上一路确定安装完毕，点击运行，右键托盘图标选择join，填写上新建的虚拟网ID，进行加入。加入后点击”show networks”查看网络状态，发现Status为&...",
            data:"2018-10-10",
            views:"101",
            tags:"test1 test2",
            id:"1",
            link:""
        },
          {title:"Windows下使用zerotier时提示PORT_ERROR错误",
            content:"ZeroTier是一款基于P2P的内网穿透工具,对于个人免费且支持最多100台设备端对端穿透，看上去很优秀。出于爱折腾的兴趣，就安装试用一下。首先在官网注册帐号并创建一个虚拟网，得到虚拟网ID。然后下载Windows安装包，在Windows上一路确定安装完毕，点击运行，右键托盘图标选择join，填写上新建的虚拟网ID，进行加入。加入后点击”show networks”查看网络状态，发现Status为&...",
            data:"2018-10-10",
            views:"101",
            tags:"test1 test2",
            id:"1",
            link:""
        }
        ]
    },
    computed:{

    },
    created: function(){

    }
});