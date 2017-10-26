/**
* Created by Administrator on 2017/10/26.
*/
<!--咨询部门以及咨询项目-->
<template>
    <div>
      <section class="showChose" v-show="showChose">
        <section class="address">
          <section class="title" :province1="this.Province">
            <div class="area" @click="provinceSelected()" :class="Province?'':'active'">{{Province ? Province : '请选择'}}
            </div>
          </section>
          <ul>
            <li>123</li>
          </ul>
        </section>
      </section>
    </div>
</template>

<script>
    export default {
        name: 'DepartPro',
        components: {},
         props:['cityshow','selecedAddFun'],
        data() {
            return {
              showChose:true,
              Province:null,
              showProvince: true,
              selected: false,
            }
        },
        created() {
          this.getc()
        },
        methods: {
          getc(){
//            console.log('--->'+cityshow.name)
          },
          closeAdd(){
            this.showChose=!thi.showChose
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
          getProvinceId: function (code, input, index) {
            this.province = code;
            this.Province = input;
            this.showProvince = false;
//         点击选择当前
            this.nameid=this.province
            Api.pickerAreaApi.pickerAreas(this.nameid).then(res=>{
              this.showCityList=res
            })
          },
          provinceSelected: function () {
          },
        }

    }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
