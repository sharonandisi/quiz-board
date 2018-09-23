var add = function(question1,question2,question3,question4,question5) {
    return question1 + question2 + question3 + question4 + question5;
};





$(document).ready(function() {
    $("form.quiz").submit(function(event) {
     event.preventDefault();
        var question1 = parseInt($("input:radio[name=q1]:checked").val());
        var question2 = parseInt($("input:radio[name=q2]:checked").val());
        var question3 = parseInt($("input:radio[name=q3]:checked").val());
        var question4 = parseInt($("input:radio[name=q4]:checked").val());
        var question5 = parseInt($("input:radio[name=q5]:checked").val());
        var result = add(question1, question2, question3, question4, question5);
        $("#output").text(result);

   });
 });
