document.addEventListener('DOMContentLoaded', () => {

const device = document.getElementById('deviceType').value;


const checkbox = document.getElementById('othersPresent');
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        const sentenceOne = document.getElementById('sentence-one');
        sentenceOne.innerText = '<<first/last name>> was seen at <<visit location>> on <<visit date>> for <<visit type>> of ' + device + '. They were accompanied by '
        ;
    } else {
        const sentenceOne = document.getElementById('sentence-one');
        sentenceOne.innerText = '<<first/last name>> was seen at <<visit location>> on <<visit date>> for <<visit type>> of ' + device + '.'

    }
});

}); //closing parentheses for DOMContentLoaded





//appendchild to insert another question

// const peopleAttended = document.getElementById('othersPresent').value //value for new question added ("who was in attendance?")

// sentenceOne.innerText = '&lt;&lt;first/last name&gt;&gt; was seen at &lt;&lt;visit location&gt;&gt; on &lt;&lt;visit date&gt;&gt; for &lt;&lt;visit type&gt;&gt; of [device]. The appointment was also attended by' +peopleAttended;
