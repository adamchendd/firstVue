<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
      <el-table highlight-current-row :data="addressData" @row-click="handleRowClick" stripe>
        <el-table-column prop="storeName" label="门店名称" align="left">
        </el-table-column>
      </el-table>
    </el-aside>
    <el-main>
      <div id="container">
      </div>
    </el-main>
  </el-container>
</template>

<script>
/* eslint-disable no-unused-vars */
import AMap from 'AMap'
import AMapUI from 'AMapUI'

let mapObj, marker

export default {
  name: 'amap-page',
  data () {
    return {
      addressData: [{
        storeName: '1. 迈森英伦瓷砖1(深圳O2O体验店)',
        storeAddress: '广东省深圳市南山区科技北二路28号豪威大厦B208',
        storeLongitude: '113.939286',
        storeLatitude: '22.560786'
      }, {
        storeName: '2. 迈森英伦瓷砖(武汉O2O体验店)',
        storeAddress: '湖北省武汉市洪山区南国大家装(江南店)2楼2-13',
        storeLongitude: '114.350641',
        storeLatitude: '30.512593'
      }, {
        storeName: '3. 迈森英伦瓷砖(佛山总部O2O体验店)',
        storeAddress: '广东省佛山市禅城区石湾镇街道跃进路148号',
        storeLongitude: '113.087086',
        storeLatitude: '22.999938'
      }, {
        storeName: '4. 迈森英伦瓷砖(洛阳O2O体验店)',
        storeAddress: '河南省洛阳市涧西区南昌路街道芳华路芳菲路1号',
        storeLongitude: '112.400436',
        storeLatitude: '34.682303'
      }, {
        storeName: '5. 迈森英伦瓷砖(龙岗O2O体验店)',
        storeAddress: '广东省深圳市龙岗区龙平西路10号乐安居057号',
        storeLongitude: '114.245735',
        storeLatitude: '22.73094'
      }, {
        storeName: '6. 迈森英伦瓷砖(东阳O2O体验店)',
        storeAddress: '浙江省金华市东阳市南马镇花园村平安路27号',
        storeLongitude: '120.212805',
        storeLatitude: '29.11467'
      }, {
        storeName: '7. 迈森英伦瓷砖(中山O2O体验店)',
        storeAddress: '广东省中山市港口镇港口大道15号红星美凯龙二楼B8051-8055',
        storeLongitude: '113.390633',
        storeLatitude: '22.578245'
      }, {
        storeName: '8. 迈森英伦瓷砖(成都O2O体验店)',
        storeAddress: '四川省成都市高新区都会路99号富森美家居建材2号店2楼B247B',
        storeLongitude: '104.06455',
        storeLatitude: '30.601651'
      }, {
        storeName: '9. 迈森英伦瓷砖(无锡O2O体验店)',
        storeAddress: '江苏省无锡市梁溪区锡沪中路383号中储建材市场C区2-1',
        storeLongitude: '120.323845',
        storeLatitude: '31.589944'
      }, {
        storeName: '10. 迈森英伦瓷砖(新余O2O体验店)',
        storeAddress: '江西省新余市渝水区青年路东方巴黎家具广场迈森英伦瓷砖',
        storeLongitude: '114.930557',
        storeLatitude: '27.812191'
      }, {
        storeName: '11. 迈森英伦瓷砖(南山O2O体验店)',
        storeAddress: '深圳市南山区后海大道与创业路交汇处南山乐安居一楼102号',
        storeLongitude: '113.924806',
        storeLatitude: '22.538004'
      }, {
        storeName: '12. 迈森英伦瓷砖(东营O2O体验店)',
        storeAddress: '山东省东营市东营区东城街道东城红星美凯龙西-众成星街25-4',
        storeLongitude: '118.690972',
        storeLatitude: '37.451672'
      }, {
        storeName: '13. 迈森英伦瓷砖(长沙百安居体验店)',
        storeAddress: '长沙市岳麓区枫林三路1099号梅溪新天地B10—107百安居O2O体验店',
        storeLongitude: '112.859395',
        storeLatitude: '28.199876'
      }, {
        storeName: '14. 迈森英伦瓷砖(杭州O2O体验店)',
        storeAddress: '浙江省杭州市江干区彭埠镇杭海路御道家园',
        storeLongitude: '120.235898',
        storeLatitude: '30.275272'
      }]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化为深圳
    init () {
      mapObj = new AMap.Map('container', {
        center: [113.939286, 22.560786],
        zoom: 15,
        resizeEnable: true
      })
    },
    clickInit (row) {
      mapObj = new AMap.Map('container', {
        center: [row.storeLongitude, row.storeLatitude],
        zoom: 15,
        resizeEnable: true
      })
    },
    handleRowClick (row) {
      // 根据门店经纬 度获取地图中心点
      this.clickInit(row)
      marker = new AMap.Marker({
        icon: '',
        position: [row.storeLongitude, row.storeLatitude],
        offset: new AMap.Pixel(-13, -30),
        cursor: 'move',
        map: mapObj
      })
      marker.setMap(mapObj)

      marker.setAnimation('AMAP_ANIMATION_BOUNCE')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container {
    width: 100%;
    height: 100%;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 50px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 50px;
  }
</style>
