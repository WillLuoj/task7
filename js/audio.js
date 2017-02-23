/**
 * Created by luojw on 2017-2-23.
 */
<script type="text/javascript">
var audio = document.getElementById("aud");
var img = document.getElementById("playpause");
img.onclick = function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
</script>