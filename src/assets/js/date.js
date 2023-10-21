
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var today  = new Date();
                
                 // 9/17/2016
                document.getElementById('mydate').innerHTML = today.toLocaleDateString("en-US", options);
                console.log(today.toLocaleDateString("en-US", options))
                alert("test");