        function fun1(event) {
            // console.log(event.target.name,event.target.id,event.target.value)
            var element = document.getElementById(event.target.id)
            element.style.backgroundColor = "lightgray"
            element.style.color = "navy"
            console.log("ON Key Down Event Is Called")
        }
        function fun2(event) {
            var element = document.getElementById(event.target.id)
            element.style.backgroundColor = "gray"
            element.style.color = "white"
            console.log("ON Key Press Event Is Called")
        }
        function fun3(event) {
            let { id, value } = event.target
            var heading = document.getElementById(`h${id}`)
            heading.innerHTML = `<span id='text'>${id}</span> : ${value}`
        }

        function postData(event) {
            event.preventDefault()
            alert(`
                Name         :   ${document.getElementById("name").value}
                Email        :   ${document.getElementById("email").value}
                Phone        :   ${document.getElementById("phone").value}
                Designation  :   ${document.getElementById("dsg").value}
                Salary       :   ${document.getElementById("salary").value}
                City         :   ${document.getElementById("city").value}
                State        :   ${document.getElementById("state").value}
            `
            )
        }