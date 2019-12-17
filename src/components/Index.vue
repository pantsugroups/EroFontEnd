<template>
  <div id="main-content">
    <div id="main-content-inner">
      <div class="container">
        <div class="col-md-12" id="ero-title">Ero.ink</div>
        <div class="col-md-12" id="ero-content">~记载了十万三千本魔（小）导（黄）书的绅士聚集地哟~</div>
        <div id="nav" class="col-md-4 ero-item">
          <a
            herf="javascript:void(0);"
            onclick="window.open('https://light.ero.ink','_blank');"
            style="text-decoration:none;color:#353535;"
          >
            <div style="background:url('img/N.png')"></div>
            <h2>小说</h2>
          </a>
        </div>
        <div id="nav" class="col-md-4 ero-item">
          <a
            herf="javascript:void(0);"
            onclick="window.open('https://gal.ero.ink','_blank');"
            style="text-decoration:none;color:#353535;"
          >
            <div style="background:url('img/G.png')"></div>
            <h2>游戏</h2>
          </a>
        </div>
        <div id="nav" class="col-md-4 ero-item">
          <a
            herf="javascript:void(0);"
            onclick="window.open('https://blog.ero.ink','_blank');"
            style="text-decoration:none;color:#353535;"
          >
            <div style="background:url('img/B.png')"></div>
            <h2>博客</h2>
          </a>
        </div>
        <!--<div id="nav" class="col-md-4 col-md-offset-4 ero-item"><a herf="javascript:void(0);" onclick="window.open('https://login.ero.ink','_blank');" style="text-decoration:none;color:#353535;"><div style="background:url('img/L.png')"></div><h2>登陆</h2></a></div>-->
      </div>
    </div>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/zui/1.9.1/lib/jquery/jquery.js" type="text/javascript"
        charset="utf-8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/zui/1.9.1/js/zui.min.js" type="text/javascript" charset="utf-8">
</script>
<script>
export default {
  name: "Index"
};
</script>
<style class="__css_exfil_protection_filtered_styles"></style>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/zui/1.9.1/css/zui.min.css");
object,
embed {
  -webkit-animation-duration: 0.001s;
  -webkit-animation-name: playerInserted;
  -ms-animation-duration: 0.001s;
  -ms-animation-name: playerInserted;
  -o-animation-duration: 0.001s;
  -o-animation-name: playerInserted;
  animation-duration: 0.001s;
  animation-name: playerInserted;
}

@-webkit-keyframes playerInserted {
  from {
    opacity: 0.99;
  }

  to {
    opacity: 1;
  }
}

@-ms-keyframes playerInserted {
  from {
    opacity: 0.99;
  }

  to {
    opacity: 1;
  }
}

@-o-keyframes playerInserted {
  from {
    opacity: 0.99;
  }

  to {
    opacity: 1;
  }
}

@keyframes playerInserted {
  from {
    opacity: 0.99;
  }

  to {
    opacity: 1;
  }
}
.index {
  position: absolute;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.title {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
