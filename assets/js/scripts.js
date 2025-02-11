const cvURL = "./Yousef Refaat CV.pdf"

const downloadCv = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = cvURL;
    downloadLink.target = "_blank"
    downloadLink.download = 'Yousef Refaat CV.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

const intersectionCallback = (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target)
        }
    }
}

const observer = new IntersectionObserver(intersectionCallback);

const items = document.querySelectorAll('section');
for (const item of items) {
    observer.observe(item);
}