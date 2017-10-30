/**
* Created by Administrator on 2017/10/26.
*/
<!--咨询部门以及咨询项目-->
<template>
    <div>
      <section class="showChose" v-if="isdep">
        <section class="address">
          <section class="title">
            <div class="area" @click="provinceSelected()" :class="Apartment?'':'active'">{{Apartment ? Apartment : '请选择'}}
            </div>
          </section>
          <ul>
            <li  v-for="v in cityshow" class="addList"  @click="getProvinceId(v.id, v.name)" v-show="showProvince"
                 :class="v.selected ? 'active' : ''">{{v.name}}</li>
          </ul>
        </section>
      </section>
      <section class="showChose" v-else>
        <section class="address">
          <section class="title">
            <div class="area" @click="projectSelect()" :class="Sumshine?'':'active'">{{Sumshine ? Sumshine : '请选择'}}
            </div>
          </section>
          <ul>
            <li  v-for="vs in proshow" class="addList"  @click="getProjectId(vs.id, vs.title)" v-show="showProvince"
                 :class="vs.selected ? 'active' : ''">{{vs.title}}</li>
          </ul>
        </section>
      </section>
    </div>
</template>
<script>
  import Util from '../../util'
    export default {
        name: 'DepartPro',
        components: {},
         props:['cityshow','selecedAddFun','ispro','proshow','isdep'],
        data() {
            return {
              showPro:true,
              Apartment:null,
              Sumshine:null,
              showProvince: true,
              selected: false,
            }
        },
        created() {
        },
        methods: {
          closeAdd(){
            this.isdep=!this.isdep
          },
          _filter(add, name, code) {
            let result = [];
            for (let i = 0; i < add.length; i++) {
              if (code == add[i].id) {
                result = add[i][name];
              }
            }
            return result;
          },
          getProvinceId: function (code, input) {
            this.apartment = code;
            this.Apartment = input;
//            this.showProvince = false;
//         点击选择当前
            Util.other.setSessionStorage('projectId', this.apartment);
            this.$emit('increments', this.Apartment,this.apartment);
          },
          getProjectId: function (code, input) {
            this.sumshine = code;
            this.Sumshine = input;
//            this.showProvince = false;
//         点击选择当前
            this.$emit('increment', this.Sumshine,this.sumshine);
          },
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .myAddress {
    width: 100%;
    background-color: white;
    border-top: 4px solid rgba(245, 245, 245, 1);
    color: #333;
    height: 9rem;
  }
  .myAddress .cont {
    border-bottom: 1px solid rgba(245, 245, 245, 0.8);
  }
  .myAddress .cont span {
    display: inline-block;
    font-size: 0.28rem;
    color: #333;
    line-height: 0.85rem;
    margin-left: 0.32rem;
  }
  .myAddress .cont section {
    float: left;
  }
  .myAddress .cont p {
    display: inline-block;
    font-size: 0.28rem;
    color: #333333;
    line-height: 0.88rem;
    margin-left: 1rem;
  }
  .myAddress .cont .pic2 {
    float: right;
    width: 0.14rem;
    height: 0.24rem;
    margin: 0.32rem 0.32rem 0.32rem 0;
  }
  .myAddress .cont p.text {
    margin-left: 0.72rem;
  }
  .showChose {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 120;
    background: rgba(0, 0, 0, 0.5);
    height: 9rem;
  }
  .address {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 121;
    background: #fff;
    width: 100%;
    height: 9rem;
  }
  .title {
    width: 7.2rem;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #ededed;
    position: relative;
  }
  .addresst {
    text-align: center;
  }
  .title h4 {
    text-align: center;
    font-weight: 400;
    width: 7.2rem;
    height: 1rem;
    line-height:1rem;
    border-bottom: 1px solid #d9d9d9;
    font-size: 0.38rem;
    position: relative;
    .C2-guanbi1 {
      position: absolute;
      top: -0.02rem;
      right: 0.24rem;
      font-size: 0.45rem;
    }
  }
  .area {
    display: inline-block;
    font-size: 0.24rem;
    line-height: 1rem;
    padding-left: 0.24rem;
    color: #000;
    font-family: '微软雅黑';
    padding-right: 0.42rem;
  }
  .addList {
    width: 100%;
    /*padding-left:0.32rem;*/
    font-size: 0.24rem;
    line-height: 0.8rem;
    color: #333;
    font-family: "微软雅黑";
  }
  /* 修改的格式 */
  .address ul {
    width: 7.2rem;
    height: 100%;
    /*max-height: 4.4rem;*/
    overflow-y: auto;
  }
  .address ul li {
    padding-left: 0.24rem;
    width: 6.94rem;
    font-size: 0.26rem;
    color: #000;
    border-bottom: 1px solid #ededed;
  }
  .address .title .active {
    color: #f74c4c;
    border-bottom: 0.03rem solid #f74c4c;
  }
  .address ul .active {
    color: #f74c4c;
  }
</style>
