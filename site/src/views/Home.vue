<template>
  <div class="home">
    <navbar></navbar>
    <div class="home-sections" id="home_header">
      <div id="home_header--wrapper">
        <div id="home_header--mainheader">
          <h1>theBestBlogEver</h1>
        </div>
        <div id="home_header--subheader">
          <h3>Blogs you see and go <span>'Oh baby Jesus, thats the best blog I ever seen'</span>.</h3>
        </div>
      </div>
    </div>
    <div class="home-sections" id="home_trending">

    </div>
    <div class="home-sections" id="home_getstarted">

    </div>
    <div class="home-sections" id="home_footer">

    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";

export default {
  name: "home",
  components: {
    navbar: navbar,
  },
};
</script>

<style lang="scss" scoped>
#home_header{
  display: flex;
  justify-content: center;
  align-items:center;
  width:100%;
  flex-direction: column;
  
  #home_header--wrapper{

    #home_header--mainheader{
      font-size: 200%;
    }

    #home_header--subheader{
      width:50%;
      span{
        font-style: italic;
        background-color:#43ddae;
      }
    }
  }

}
</style>
