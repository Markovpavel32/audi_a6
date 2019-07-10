<template>
  <div>
    <div class="car_detail_container" style="top: 362px;">
      <car-detail class="flex-column d-inline-flex align-items-center" style="margin-left: 37px;">
        <template slot="header-text">
          <div class="car_detail_tool" style="margin-bottom: 11px;">
            <span>2-литровый двигатель</span>
            <br/>
            <span>245 л.с.</span>
          </div>
        </template>
        <template slot="footer-text">
          <pretty-square style="margin-top: 20px"></pretty-square>
        </template>
      </car-detail>
    </div>
    <div class="car_detail_container" style="top: 272px;">
      <car-detail class="flex-column d-inline-flex align-items-center" style="margin-left: 247px;">
        <template slot="header-text">
          <div class="car_detail_tool" style="margin-bottom: 31px;">
            <span>MMI touch response c двумя</span>
            <br/>
            <span>сенсорными дисплеями</span>
          </div>
        </template>
        <template slot="footer-text">
          <pretty-square style="margin-top: 20px"></pretty-square>
        </template>
      </car-detail>
    </div>
    <div class="car_detail_container" style="top: 301px;">
      <car-detail class="flex-column d-inline-flex align-items-center" style="margin-left: 635px;">
        <template slot="header-text">
          <div class="car_detail_tool" style="margin-bottom: 31px;">
            <span>Электропривод крышки</span>
            <br/>
            <span>багажника</span>
          </div>
        </template>
        <template slot="footer-text">
          <pretty-square style="margin-top: 20px"></pretty-square>
        </template>
      </car-detail>
    </div>
    <div class="car_detail_container" style="top: 593px;">
      <car-detail class="flex-column d-inline-flex align-items-center" style="margin-left: 209px;">
        <template slot="header-text">
          <pretty-square style="margin-bottom: 20px"></pretty-square>
        </template>
        <template slot="footer-text">
          <div class="car_detail_tool" style="margin-top: 26px;">
            <span>Уникальная технология</span>
            <br/>
            <span>mild hybrid</span>
          </div>
        </template>
      </car-detail>
    </div>
    <div class="car_detail_container" style="top: 579px;">
      <car-detail class="flex-column d-inline-flex align-items-center" style="margin-left: 525px;">
        <template slot="header-text">
          <pretty-square style="margin-bottom: 20px"></pretty-square>
        </template>
        <template slot="footer-text">
          <div class="car_detail_tool" style="margin-top: 30px;">
            <span>Полный привод quattro</span>
            <br/>
            <span>c технологией ultra</span>
          </div>
        </template>
      </car-detail>
    </div>
    <slot name="img"></slot>
  </div>
</template>

<script>
import CarDetail from './CarDetail'
import PrettySquare from '../assets/lib/PrettySquareItem'
export default {
  name: 'car-detail-list',
  components: {PrettySquare, CarDetail}
}
</script>
