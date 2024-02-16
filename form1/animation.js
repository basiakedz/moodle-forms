$(document).ready(function () {
  const maxSnowflakes = 50;

  function createSnowflake() {
    const snowflake = $(
      '<img class="snowflake" src="img/snowflake.png" alt="Snowflake" />'
    );
    const startPositionLeft = Math.random() * $(window).width();
    snowflake.css({
      top: 0,
      left: startPositionLeft,
      animationDuration: Math.random() * 5 + 5 + "s",
    });
    $("body").append(snowflake);

    const currentSnowflakes = $(".snowflake").length;
    if (currentSnowflakes > maxSnowflakes) {
      $(".snowflake:first").remove();
    }
  }

  function startSnowfall() {
    setInterval(createSnowflake, 1000);
  }

  startSnowfall();
});
