const tabItems = document.querySelectorAll('.tab');
const container = document.querySelector('.tab-content')
// tabItems.forEach(item => item.addEventListener('click', ()=> console.log('clicked')));

// listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));


function selectItem(e) {
    // first remove the border from every tab
    tabItems.forEach(item => item.classList.remove('active'));
    // then add the active class for border
    this.classList.add('active');


    if (this.classList.contains('cancel')) {
        const item = `
        <div class="tab-1-content">
            <div class="info">
            <p>If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.</p>
            <a class="btn" href="#">
                watch free for 30 days.
            </a>
            </div>
            <div class="info-img">
            <img src="./img/tab-content-1.png" alt="">
            </div>
        </div>        
        `;
        container.innerHTML = item;
    }

    if (this.classList.contains('watch')) {
        const item = `
        <div class="tab-2-content">
            <div class="tab-2-first">
                <p>Watch TV shows and movies anytime, anywhere
                - personalized for you.</p>
                <a class="btn" href="#">
                watch free for 30 days.
                </a>
            </div>

            <div class="tab-2-second">
                <div class="tab-2-second-content">
                <img src="./img/tab-content-2-1.png" alt="">
                <p class="tab-2-p1">Watch on your TV</p>
                <p class="tab-2-p2">Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>

                <div class="tab-2-second-content">
                <img src="./img/tab-content-2-2.png" alt="">
                <p class="tab-2-p1">Watch instantly or download for later</p>
                <p class="tab-2-p2">Available on phone and tablet, wherever you go.</p>
                </div>

                <div class="tab-2-second-content">
                <img src="./img/tab-content-2-3.png" alt="">
                <p class="tab-2-p1">Use any computer</p>
                <p class="tab-2-p2">Watch right on Netflix.com.</p>

                </div>
            </div>
        </div>        
        `;
        container.innerHTML = item;
    }

    if (this.classList.contains('pick')) {
        const item = `
        <div class="tab-3-content">
            <div class="tab-3-top">
                <p>Choose one plan and watch everything on Netflix</p>
                <a class="btn" href="#">
                watch free for 30 days.
                </a>

                <div class="tab-3-bottom">
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>basic</th>
                        <th>standard</th>
                        <th>premium</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Monthly price after free month ends on 6/19/19</td>
                        <td>$8.12</td>
                        <td>$12.54</td>
                        <td>$15.89</td>
                    </tr>
                    <tr>
                        <td>HD Available</td>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                    </tr>
                    <tr>
                        <td>Ultra HD Available</td>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                    </tr>
                    <tr>
                        <td>Screens you can watch on at the same time</td>
                        <td>1</td>
                        <td>2</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Watch on your laptop, TV, phone and tablet</td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                    </tr>
                    <tr>
                        <td>Unlimited movies and TV shows</td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                    </tr>
                    <tr>
                        <td>Cancel anytime</td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                    </tr>
                    <tr>
                        <td>First month free</td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

        </div>        
        `;
        container.innerHTML = item;
    }
}