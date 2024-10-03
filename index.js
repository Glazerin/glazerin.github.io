function showMore(id) {
    const p = document.getElementById(id)
    const btn = document.getElementById('btn--' + id)
    if (p.classList.contains('tag--desc')) {
        btn.innerHTML = "Hide Details"
        p.classList.remove('tag--desc')
    } else {
        btn.innerHTML = "Show More"
        p.classList.add('tag--desc')
    }
}