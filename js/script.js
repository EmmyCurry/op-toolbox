

    const othersPresent = document.getElementById('othersPresent');
    othersPresent.addEventListener('click', () => {
        const sentenceOne = document.getElementById('sentence-one')
        sentenceOne.innerText = 'whole thing text changed';
        
        //'&lt;&lt;first/last name&gt;&gt; was seen at &lt;&lt;visit location&gt;&gt; with additional persons present on &lt;&lt;visit date&gt;&gt; for &lt;&lt;visit type&gt;&gt; of [device].'

    })


//appendchild to insert another question

const peopleAttended = document.getElementById('othersPresent').value //value for new question added ("who was in attendance?")

sentenceOne.innerText = '&lt;&lt;first/last name&gt;&gt; was seen at &lt;&lt;visit location&gt;&gt; on &lt;&lt;visit date&gt;&gt; for &lt;&lt;visit type&gt;&gt; of [device]. The appointment was also attended by' + peopleAttended
