function scheduleTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDate = document.getElementById('taskDate').value;
    const taskTime = document.getElementById('taskTime').value;
    const notify = document.getElementById('notify').checked;
    const taskform = document.getElementById('taskform');


    const tasklist = document.createElement("div");
    tasklist.setAttribute("id","tasklist");

    const taskdetail = document.createElement("h1");
    taskdetail.setAttribute("id","taskname");
    taskdetail.innerHTML=`${taskName} - ${taskDate} - ${taskTime}`;
    
    console.log('Task Name:', taskName);
    console.log('Task Date:', taskDate);
    console.log('Task Time:', taskTime);
    console.log('Notify:', notify);

    if ("Notification" in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted' && notify) {
                const now = new Date();
                const taskDateTime = new Date(`${taskDate}T${taskTime}`);
                const timeDifference = taskDateTime - now;

                if (timeDifference > 0) {
                    setTimeout(() => {
                        const notification = new Notification('Task Reminder', {
                            body: `Task: ${taskName}\nDate: ${taskDate}\nTime: ${taskTime}`,
                        });
                        alert("Remainder !");
                        notification.addEventListener('click', () => {
                            console.log('Notification clicked');
                        });
                    }, timeDifference);
                } else {
                    console.log('Invalid date or time for notification');
                }
            }
        });
    }

    taskform.appendChild(tasklist);
    tasklist.appendChild(taskdetail);

}
