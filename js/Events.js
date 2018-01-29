window.onload = function    ()
{
    document.getElementById("aRange").addEventListener("change", rangeChangeEvent);
    document.getElementById("aText").addEventListener("change", rangeChangeEvent);
   document.getElementById("firstNameText").focus();

   document.getElementById("firstNameText").addEventListener("blur", function () {
        if (this.value.length < 5) {
            document.getElementById("ruleViolation").innerText = 'First Name is required to be 5 letters.';
        document.getElementById("ruleViolation").style.color = 'red';
        this.focus();
        }
        });

        document.getElementById("firstNameText").addEventListener("keydown", function () {
            document.getElementById("outputText").innerText = window.event.keyCode;
        });

         /* 
         Não está funcionando corretamente
         if (window.event.ctrlKey && String.fromCharCode(window.event.keyCode) == 'f')
            document.getElementById("firstNameText").focus();
        if (window.event.ctrlKey && String.fromCharCode(window.event.keyCode) == 'l')
            document.getElementById("lastNameText").focus();
        return false;*/

        document.getElementById("yellowBox").addEventListener("click", yellowBoxClick);
}

function rangeChangeEvent()
{
    document.getElementById("rangeValue").innerText = this.value;
}

function yellowBoxClick() {
    document.write("Client X: " + window.event.clientX + " ClientY: "
    + window.event.clientY);
    document.write("<BR />");
    document.write("offsetX: " + window.event.offsetX + " offsetY: "
    + window.event.offsetY);
    document.write("<BR />");
    document.write("screen X: " + window.event.screenX + " screenY: "
    + window.event.screenY);
    }