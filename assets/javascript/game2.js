
      for (var i = 0; i < letters.length; i++) {
        var letterBtn = $("<button>");
        letterBtn.addClass("letter-button letter letter-button-color");
        letterBtn.attr("data-letter", letters[i]);
        letterBtn.text(letters[i]);
        $("#buttons").append(letterBtn);
      };

      $(document).on("keyup", function () {
        var fridgeMagnet = $("<div>");
        fridgeMagnet.addClass("letter fridge-color")
        fridgeMagnet.text($(this).attr("data-letter"));
        $("#display").append(fridgeMagnet);
      });

      $("#clear").on("click", function() {
        $("#display").empty();
      })
