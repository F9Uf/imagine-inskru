<template>
  <div class="students">
    <div class="container-fluid search-wrapper">
      <p>
        <input
          class="form-control ds-input"
          id="myInput"
          type="text"
          placeholder="Search name, cuisine, neighborhood…"
        />
      </p>
      <div class="bt-filter">
        <div class="set-1">
          <div class="line">
            <button class="btn choose-from" type="button">CHOOSE FROM</button>
            <!-- <button class="btn bkrw-tags" type="button">Z to A</button> -->
            <button class="btn bkrw-tags" type="button" value="มาสาย">มาสาย</button>
            <button class="btn bkrw-tags" type="button" value="ขาดเรียนบ่อย">ขาดเรียนบ่อย</button>
          </div>
        </div>
        <div class="set-2">
          <div class="line">
            <button class="btn bkrw-tags" type="button" value="ติดยา">ติดยา</button>
            <button class="btn bkrw-tags" type="button" value="ถูกล่วงละเมิดทางเพศ">ถูกล่วงละเมิดทางเพศ</button>
            <button class="btn bkrw-tags" type="button" value="ไม่ส่งการบ้าน">ไม่ส่งการบ้าน</button>
            <button class="btn bkrw-tags" type="button" value="ชอบโดดเรียน">ชอบโดดเรียน</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container content">
      <div class="item" v-for="(item,index) in students" :key="index" v-show="!loading">
        <div class="detail d-flex align-items-stretch">
          <div class="image">
            <router-link to="/profile/" :title="item.name">
              <img
                class="rounded float-left"
                v-if="item.avatar_url.length != 0"
                v-bind:src="item.avatar_url"
              />
              <img class="rounded float-left" v-else src="/img/bkrw-no-pic.png" />
            </router-link>
          </div>
          <div class="text">
            <div class="title">
              <router-link to="/profile/" :title="item.name">{{ item.name }}</router-link>
            </div>
            <div class="home-area">
              <span class="cuisine" v-text="item.role"></span>
              &#8226;
              <span class="area" v-text="item.place"></span>
            </div>
            <div class="box-tag" v-if="item.tag.length != 0">
              <img class="icon" src="/icon/stars.png" />
              <span
                class="view"
                v-for="(tag, key) in item.tag"
                :key="key"
                v-text="item.tag.length != (key + 1) ? tag + '' : tag"
              ></span>
            </div>
            <div class="link">
              <img class="icon" src="/icon/note-add.png" />
              <span class="view">
                <router-link to="/profile/" :title="item.name ">
                  <u>View Details</u>
                </router-link>
              </span>
            </div>
          </div>
        </div>
        <div class="years">
          <div class="time d-flex align-items-stretch flex-wrap justify-content-left">
            <div class="slot" v-for="(year,index) in item.years" :key="index" v-html="year"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: null,
      students: null,
      domain: null,
      empty_data: null
    };
  },
  mounted() {
    this.loading = true;
    this.empty_data = true;
    axios
      .get("/authors.json")
      .then(response => {
        this.students = response.data;
        this.loading = false;
        if (response.data.length === 0) {
          this.empty_data = false;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>
.students {
  min-height: 100%;
}
.students h4 {
  font-size: 0.8rem;
}
.students .form-control {
  font-size: 0.8rem;
}
.students .bt-filter button {
  background-color: #f4f5f4;
  border: 1px solid #f6f6f6;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 10px;
  width: 90px;
  margin-bottom: 10px;
}
.students .bt-filter button.active {
  background-color: #ffe8e6;
  color: #e5130a;
  font-weight: bold;
}
.students .bt-filter .set-1 {
  text-align: left;
  overflow: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE 10+ */
}
.students .bt-filter .set-1::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
.students .bt-filter .set-1 button {
  margin-bottom: 0;
}
.students .bt-filter .set-1 .choose-from {
  background-color: unset;
  border: none;
  font-size: 12px;
  width: 122px;
  color: #000;
  font-weight: normal;
  text-align: left;
}
.students .bt-filter .set-1 .choose-from::after {
  background-image: url(/icon/unfold-more.png);
  background-size: cover;
  display: inline-block;
  width: 10px;
  height: 10px;
  content: "";
}
.students .bt-filter .set-1 .choose-from.active::after {
  background-image: url(/icon/unfold-less.png);
  background-size: cover;
  display: inline-block;
  width: 10px;
  height: 10px;
  content: "";
}
.students .bt-filter .set-1 .line {
  width: 120%;
  height: 40px;
  overflow: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE 10+ */
}
.students .bt-filter .set-1 .line::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
.students .bt-filter .set-2 {
  text-align: left;
  overflow: auto;
}
.students .bt-filter .set-2 .line {
  width: 110%;
  overflow: auto;
  height: 40px;
}
@media screen and (min-width: 992px) {
  .students {
    padding-top: 60px;
  }
}
.students .search-wrapper {
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
}
.students .search-wrapper input {
  border-radius: 10px;
  width: 100%;
}
.students .search-wrapper input::placeholder {
  color: #d6d6d6;
}
.students .content {
  padding-top: 15px;
  padding: 15px 10px;
}
.students .content .item {
  min-height: 85px;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 10px;
}
.students .content .item .detail {
  padding-bottom: 10px;
  text-align: left;
  color: #454545;
}
.students .content .item .detail a {
  color: #454545;
}
.students .content .item .detail .image {
  float: left;
  padding-right: 10px;
}
@media screen and (min-width: 768px) {
  .students .content .item .detail .image {
    padding-right: 30px;
  }
}
.students .content .item .detail .text {
  width: 100%;
}
.students .content .item .detail .title {
  font-family: "Roboto";
  font-size: 16px;
  font-weight: bold;
}
.students .content .item .detail .title a {
  color: #e5130a !important;
}
.students .content .item .detail .cuisine-area {
  font-size: 14px;
}
.students .content .item .detail .link {
  font-size: 14px;
  font-weight: bold;
  padding: 5px 0;
}
.students .content .item .detail .link span {
  padding: 0 10px 0 0;
}
.students .content .item .detail .link span.menu {
  cursor: pointer;
}
.students .content .item .detail .link .icon {
  color: #000;
  width: 12px;
  margin: auto;
}
.students .content .item .detail .box-tag {
  padding: 5px 0 2px;
  font-size: 12px;
}
.students .content .item .detail .box-tag .view {
  background-color: #ffe8e5;
  color: #e5130a;
  font-size: 10px;
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
}
.students .content .item .detail .box-tag .icon {
  color: #000;
  width: 12px;
  padding-bottom: 3px;
}
.students .content .item .detail .box-price {
  font-size: 14px;
  padding: 5px 0;
}
.students .content .item .detail .box-price .price {
  font-weight: bold;
}
.students .content .item .detail .box-price .starting-at-price {
  float: left;
  padding: inherit;
  padding-left: 15px;
}
@media screen and (min-width: 329px) and (max-width: 414px) {
  .students .content .item .detail .box-price .starting-at-price {
    padding-top: unset;
  }
}
@media screen and (min-width: 441px) and (max-width: 452px) {
  .students .content .item .detail .box-price .starting-at-price {
    padding-top: unset;
  }
}
@media screen and (min-width: 479px) {
  .students .content .item .detail .box-price .starting-at-price {
    padding-top: unset;
  }
}
@media screen and (min-width: 542px) and (max-width: 575px) {
  .students .content .item .detail .box-price .starting-at-price {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}
@media screen and (min-width: 576px) and (max-width: 767px) {
  .students .content .item .detail .box-price .starting-at-price {
    -ms-flex: 0 0 33.555%;
    flex: 0 0 33.555%;
    max-width: 33.555%;
  }
}
@media screen and (max-width: 323px) {
  .students .content .item .detail .box-price .starting-at-price {
    -ms-flex: 0 0 42.5%;
    flex: 0 0 42.5%;
    max-width: 42.5%;
  }
}
@media screen and (max-width: 431px) and (min-width: 415px) {
  .students .content .item .detail .box-price .starting-at-price {
    -ms-flex: 0 0 44.333333%;
    flex: 0 0 44.333333%;
    max-width: 44.333333%;
  }
}
.students .content .item .detail .box-price .starting-at-price .icon {
  width: 12px;
  padding-bottom: 3px;
}
.students .content .item .detail .box-price .alcohol-package {
  float: left;
}
.students .content .item .years .slot {
  background-color: #e5130a;
  border-radius: 4px;
  width: 85px;
  height: 30px;
  overflow: hidden;
  padding-top: 8px;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 3px;
  margin-bottom: 3px;
  margin-right: 16px;
  text-align: center;
  line-height: 16px;
}
.students .content .modal-fullscreen {
  padding: 0 !important;
  background: #fff;
}
.students .content .modal-fullscreen div.modal-content {
  background: transparent;
  border: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.students .content .modal-fullscreen div.modal-content div.modal-header {
  border-bottom: none;
}
.students .content .modal-fullscreen div.modal-content div.modal-header .close {
  float: left;
  margin: 0%;
  margin-top: 10px;
  font-size: 14px;
}
.students
  .content
  .modal-fullscreen
  div.modal-content
  div.modal-header
  .modal-title {
  float: right;
}
.students .content .modal-fullscreen div.modal-content div.modal-body {
  margin: 20px;
  background-color: #fff;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.41);
  color: #969696;
  font-weight: 300;
  line-height: 1.42857143;
}
.students
  .content
  .modal-fullscreen
  div.modal-content
  div.modal-body
  .citi-dish {
  border: 1px solid #00658e;
  font-size: 12px;
  padding: 10px;
  color: #fff;
  background-color: #008fc9;
}
.students
  .content
  .modal-fullscreen
  div.modal-content
  div.modal-body
  .citi-dish
  h4,
.students
  .content
  .modal-fullscreen
  div.modal-content
  div.modal-body
  .citi-dish
  p {
  color: #fff;
}
.students
  .content
  .modal-fullscreen
  div.modal-content
  div.modal-body
  .citi-dish
  .logo-citi {
  text-align: center;
}
.students
  .content
  .modal-fullscreen
  div.modal-content
  div.modal-body
  .link-booking {
  padding-top: 20px;
  text-align: center;
}
.students
  .content
  .modal-fullscreen
  div.modal-content
  div.modal-body
  .link-booking
  a {
  color: #ffbe22;
  font-weight: bold;
}
.students .content .modal-fullscreen div.modal-content div.modal-body b,
.students .content .modal-fullscreen div.modal-content div.modal-body strong {
  font-weight: bold;
  font-family: "PT Serif", serif;
}
.students .content .modal-fullscreen div.modal-content div.modal-body h3 {
  font-size: 24px;
}
.students .content .modal-fullscreen div.modal-content div.modal-body h4 {
  font-size: 18px;
  color: #969696;
  margin: 0;
}
.students .content .modal-fullscreen div.modal-content div.modal-body p {
  font-size: 16px;
  font-style: unset;
  margin: 0 0 10px;
  color: #969696;
  font-weight: 300;
  line-height: 1.42857143;
  min-height: 22px;
}
.students
  .content
  .modal-fullscreen
  div.modal-content
  div.modal-body
  p:last-child {
  margin-bottom: 0;
}
.students .content .modal-fullscreen div.modal-content div.modal-body div {
  min-height: 20px;
}
.students .content .modal-fullscreen .modal-dialog {
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
}
@media screen and (max-width: 414px) {
  .students .content .item .detail {
    padding-bottom: 10px;
    text-align: left;
    color: #454545;
  }
  .students .content .item .detail a {
    color: #454545;
  }
  .students .content .item .detail .image {
    float: left;
    padding-right: 10px;
  }
  .students .content .item .detail .image img {
    width: 120px;
    height: auto;
  }
  .students .content .item .detail .title {
    font-family: "Roboto";
    font-size: 16px;
    font-weight: bold;
  }
  .students .content .item .detail .title a {
    color: #e5130a !important;
  }
  .students .content .item .detail .cuisine-area {
    font-size: 10px;
  }
  .students .content .item .detail .link {
    font-size: 10px;
    font-weight: bold;
    padding: 5px 0 2px;
  }
  .students .content .item .detail .link span {
    padding: 0 10px 0 0;
  }
  .students .content .item .detail .link span.menu {
    cursor: pointer;
  }
  .students .content .item .detail .link .icon {
    color: #000;
    width: 12px;
    padding-bottom: 3px;
  }
  .students .content .item .detail .box-price {
    font-size: 10px;
    padding: 5px 0;
  }
  .students .content .item .years .slot {
    width: 30px;
    height: auto;
    font-size: 10px;
    font-weight: bold;
    line-height: 10px;
    padding: 5px;
    margin: 5px;
  }
}
@media screen and (min-width: 415px) and (max-width: 452px) {
  .students .content .item .detail .image {
    float: left;
    padding-right: 10px;
  }
  .students .content .item .detail .image img {
    width: 142px;
    height: auto;
  }
}
</style>
