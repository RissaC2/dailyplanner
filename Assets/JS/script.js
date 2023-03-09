$(document).ready(function() {
  var currentHour = moment().hours();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id"));
    var textarea = $(this).find(".description");

    if (blockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }

    if (blockHour === currentHour) {
      textarea.addClass("current");
    } else {
      textarea.removeClass("current");
    }

    var savedText = localStorage.getItem(blockHour);
    if (savedText !== null) {
      textarea.val(savedText);
    }
  });

  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

  $(".saveBtn").on("click", function () {
    var blockId = $(this).parent().attr("id");
    var blockText = $(this).siblings(".description").val();

    if (blockText !== "") {
      localStorage.setItem(blockId, blockText);
      $(this).text("Saved!");
      var saveButton = $(this);
      setTimeout(function () {
        saveButton.text("Save");
      }, 1000);
    }
  });

  $(window).on("load", function () {
    $(".description").each(function () {
      var blockId = $(this).parent().attr("id");
      var savedText = localStorage.getItem(blockId);

      if (savedText !== null) {
        $(this).val(savedText);
      }
    });
  });
});
