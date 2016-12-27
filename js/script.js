$(document).on("pageinit", "#Pagelogn", function() {
    $("#logn").on("click", function() {
        var name = $('#name').val();
        var password = $('#password').val();
        if (name) {
            $("#logn").attr("href", "#page1")
            $("#logn").next().html("")
        } else {
            $("#logn").attr("href", "")
            $("#logn").next().html("用户名密码不匹配")
        }

    });
});
$(document).on("pageinit", "#page1", function() {
    $("#TelBtn").on("click", function() {
        var tel = $('#iphone').val();
        $("#TelBtn").attr("href", "tel:" + tel);
    });
});
$(document).on("pageinit", "#page2", function() {
    $("#SmsBtn").on("click", function() {
        var Stel = $('#SmsPhone').val();
        var TextArea = $('textarea').val();
        $("#SmsBtn").attr("href", "sms:" + Stel + "?body=" + TextArea);
    });
});
$(document).on("pageinit", "#page3", function() {
    var obj = [
        { "tel": 135, "date": "2016-12-1" }, { "tel": 136, "date": 2016 - 12 - 2 }, { "tel": 138, "date": 2016 - 12 - 3 },
        { "tel": 170, "date": "2016-12-4" }, { "tel": 188, "date": 2016 - 12 - 5 }, { "tel": 166, "date": 2016 - 12 - 6 },
        { "tel": 171, "date": "2016-12-7" }, { "tel": 155, "date": 2016 - 12 - 8 }, { "tel": 169, "date": 2016 - 12 - 9 }
    ]
    for (var i = 0; i < obj.length; i++) {
        $('#UlTel').append("<li data-icon='info' class='ui-last-child'>" + "<a href='tel:13526636962' class='ui-btn ui-btn-icon-right ui-icon-info'>" + "<h4>" + obj[i].tel + "</h4>" + "<span class='ui-li-count'>" + obj[i].date + "</span>" + "</a>" + "</li>")

    }

});
$(document).on("pageinit", "#page4", function() {

});
$(document).on("pageinit", "#bindingPage", function() {
    $("fieldset").hide()
    $("#axyb").show()
    $("#T1").on("click", function() {
        $("#axyb").show()
        $("#axb").hide()
    })
    $("#T2").on("click", function() {
            $("#axb").show()
            $("#axyb").hide()
        })
        /*$.ajax({
               type: "GET",
               url: 'data/tel_date.json',
               dataType: "json",
               success: function(data) {
                   var obj = JSON.parse(data)
                   alert(data)
                  
               }
           });*/
    var userName = [
        { "tel": 135, "name": "用户1" }, { "tel": 136, "name": "用户2" }, { "tel": 138, "name": "用户3" },
        { "tel": 170, "name": "用户4" }, { "tel": 188, "name": "用户5" }, { "tel": 166, "name": "用户6" },
        { "tel": 171, "name": "用户7" }, { "tel": 155, "name": "用户8" }, { "tel": 169, "name": "用户9" }
    ]
    for (var i = 0; i < userName.length; i++) {
        $("select[name='axyb']").append("<option value=''>" + userName[i].tel + userName[i].name + "</option>")
        $("select[name='axb']").append("<option value=''>" + userName[i].tel + userName[i].name + "</option>")
    }

    $("option:first").html("")
    $("select[name='axb']>option:first").html("")
    var axybTo = $("select[name='axyb']").find("option:selected").html();
    var axbTo = $("select[name='axb']").find("option:selected").html();

    $("#axyb>a").on("click", function() {
        alert("传给后台的值"________axybTo)
    })
    $("#axb>a").on("click", function() {
        alert("传给后台的值"________axbTo)
    })
});
