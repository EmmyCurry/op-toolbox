// document.addEventListener('DOMContentLoaded', () => {

// const checkbox = document.getElementById('othersPresent');
// const sentenceOne = document.getElementById('sentence-one');
// checkbox.addEventListener('change', () => {
//     if (checkbox.checked) {
//         const inAttendance = document.getElementById('q1a')
//         inAttendance.classList.remove('hidden');

//         sentenceOne.innerText = '<<first/last name>> was seen at <<visit location>> on <<visit date>> for <<visit type>> of an AFO. Patient was accompanied by '// + peopleAttended;
//         ;
//     } else {
//         const inAttendance = document.getElementById('q1a')

//         sentenceOne.innerText = '<<first/last name>> was seen at <<visit location>> on <<visit date>> for <<visit type>> of an AFO.'
//         inAttendance.classList.add('hidden');
//     }
// });


// }); //closing parentheses for DOMContentLoaded







// const peopleAttended = document.getElementById('othersPresent').value //value for new question added ("who was in attendance?")

// sentenceOne.innerText = '&lt;&lt;first/last name&gt;&gt; was seen at &lt;&lt;visit location&gt;&gt; on &lt;&lt;visit date&gt;&gt; for &lt;&lt;visit type&gt;&gt; of [device]. The appointment was also attended by' +peopleAttended;

/* big old mess I took from line 12
let sectionOne = document.getElementById('basic-info');
        let additionalPeople = document.createElement('div');
            additionalPeople.classList.add('q1a');
            let additionalPeopleInput = document.createElement('input');
                additionalPeopleInput.setAttribute('type','textArea');
                additionalPeopleInput.setAttribute('title','Who else attended?'); // how to get text??
                additionalPeople.appendChild(additionalPeopleInput);
            sectionOne.appendChild(additionalPeopleInput);
            */