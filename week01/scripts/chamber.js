const date = new Date();
const year = date.getFullYear();
document.querySelector("#currentyear").textContent = year;


document.querySelector(
	"#lastModified"
).textContent = `Last Update: ${document.lastModified}`;

/*----------- DISCOVERY --------------*/

const sidebar = document.getElementById("#sidebar");

function generateCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    const calendarHTML = `
        <h3>${monthNames[month]} ${year}</h3>
        <table>
            <thead>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
            </thead>
            <tbody>
                <tr>`;

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                calendarHTML += "<td></td>";
            } else if (dayCount > daysInMonth) {
                break;
            } else {
                calendarHTML += `<td>${dayCount}</td>`;
                dayCount++;
            }
        }
        if (dayCount > daysInMonth) {
            break;
        } else {
            calendarHTML += "</tr><tr>";
        }
    }

    calendarHTML += `
            </tr>
        </tbody>
    </table>`;

    sidebar.innerHTML = calendarHTML;
}

// Display current month's calendar
const currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());


/*----------- storage --------------*/
document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    const lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        sidebar.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const today = new Date();
        const diffTime = Math.abs(today - new Date(lastVisit));
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            sidebar.textContent = "You last visited 1 day ago.";
        } else {
            sidebar.textContent = `You last visited ${diffDays} days ago.`;
        }
    }

    // Update last visit date in localStorage
    localStorage.setItem('lastVisit', new Date());
});