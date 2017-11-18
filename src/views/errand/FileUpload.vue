/**
* Created by wyg on 2017/9/25.
*/

<template>
  <div>
    <div class="fff padding-container title">
      <p class="twoLineFont">{{title}}</p>
    </div>
    <div class="box-margin-top fff">
      <template v-for="(item,index) in fileList">
        <CellSwipe :title="item.title" :rightFun="deleteUploadData" :label="item.label"
                   :type="1" :id="item.id"></CellSwipe>
      </template>
    </div>
    <p class="add fff box-margin-top">
      <i class="OAIndexIcon C2-xinjian" @click="fileUploadBtn"></i>
      <input id="fileUpInput" type="file" class="fileUp" @change="fileUploadFun">
    </p>
    <div class="padding-container">
      <mt-button type="primary" size="large" @click="submit">完成</mt-button>
    </div>
  </div>
</template>

<script>
  import CellSwipe from 'components/public/CellSwipe.vue'
  import axios from 'axios'
  import Api from '../../api'
  import Util from '../../util'
  export default {
    name: 'fileUpload',
    components: {CellSwipe},
    data () {
      return {
        isSubmit:false,
        selectFiles:null,
        fileList:[],
        title:''
      }
    },
    created(){
      this.title = sessionStorage.getItem('errandTitle');
      this.getUploadData(this.errandDataId);
    },
    methods: {
      submit(){
        this.$router.go(-1);
      },
      //执行input 点击事件
      fileUploadBtn(){
        document.getElementById('fileUpInput').click();
      },
      //返回时间
      returnTime(){
        let time = new Date();
        return `${time.getFullYear()}-${this.timeCompletion(time.getMonth()+1)}-${this.timeCompletion(time.getDate())}`;
      },
      //一位数补0
      timeCompletion(number){
        return number<10?`0${number}`:number;
      },
      //文件上传
      fileUploadFun(e){
        let files = e.target.files;
        let formData = new FormData();
        formData.append('file', files[0]);
        console.log(files[0]);
        let fileNameArr = files[0].name.split('.');
        let li = {
            type:'.'+fileNameArr[1],
            title:files[0].name,
            label:`${(files[0].size/1024).toFixed(1)}kb `,
            url:'',
            id:`${new Date().getTime()}${Math.floor(Math.random()*10)}`
        };

        // 返回文件路径
        Api.errandApi.uploadFile(formData,config).then(res=>{
          if(res){
            li.url = res.url;
            li.label += this.returnTime();
            this.fileList.push(li);
            this.saveUploadData(li);
          }
        })
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        };
      },
      //删除上传的缓存文件
      deleteUploadData(id){
        console.log('要删除的ID',id);
        let errandData = Util.other.getSessionStorage('errandData');
        for(let key in errandData){
          if(key === this.errandDataId){
            let arr = errandData[key];
            for(let i in arr){
              if(arr[i].id === id){
                if(arr[i].attachId){ //判断是否为暂存修改
                   Api.errandApi.deleteListByBusinessId(arr[i].attachId).then(res=>{
                     arr.splice(i,1);
                     console.log('errandData',JSON.stringify(errandData));
                   })
                }else{
                  arr.splice(i,1);
                }

              }
            }
            this.fileList = arr;
          }
        }



        Util.other.setSessionStorage('errandData',errandData);
      },
      //根据ID获取缓存中的文件 渲染到数据
      getUploadData(id){
        let errandData = Util.other.getSessionStorage('errandData');
        for(let key in errandData){
            if(key == id){
              this.fileList = errandData[key];
              break;
            }
        }
      },
      //保存上传的文件
      saveUploadData(data){
        let id = this.errandDataId;
        let errandData = Util.other.getSessionStorage('errandData');
        let isMatching = false;
        if(errandData){
          for(let key in errandData){
            if(key == id){
              errandData[key].push(data);
              isMatching = true;
              break;
            }
          }
          if(!isMatching){
            errandData[id]=[];
            errandData[id].push(data);
          }
        }else{
          errandData = {};
          errandData[id]=[];
          errandData[id].push(data);
        }
        alert(JSON.stringify(errandData))
        Util.other.setSessionStorage('errandData',errandData);
      }

    },
    watch:{
      'selectFiles':()=>{
      }
    },
    computed:{
      errandDataId(){
          return `${this.$route.params.id}-${this.$route.params.filesId}`;
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .title{
    font-size: .28rem;
    height: 1.2rem;
    display: flex;
    align-content: center;
    p{
      display: flex;
      align-content: center;
    }
  }
  .add{
    display: flex;
    justify-content: center;
    align-items: center;
    height: .81rem;
    i{
      font-size: .41rem;
      color:#ccc;
    }
    .fileUp{
      display: none;
    }
  }
</style>
