class DashboardMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="style.css">
            <div class="main-content">
                <div class="left-content">
                <img src="image/Man.png" alt="man">
                </div>
                <div class="right-content">
                    <h1>Track your <br> productivity <br>
                    <img class="capsule" src="image/capsul.png" />
                    <span class="on">online</span> </h1>
                    <div class="right-image">
                        <p>Solving problems with drowsiness, <br>
                        apathy, lack of motivation and other <br>
                        factors that do not allow you grow   </p>
                        <div class="right-arrow">
                            <img class="arrow-icon" src="image/arrow.png" alt="arrow"  />
                        </div>
                    </div>
                </div>
            </div>
        `;
        // Add functionality here
        const arrowIcon = this.shadowRoot.querySelector('.arrow-icon');
        arrowIcon.addEventListener('click', () => {

        });
    }
}

customElements.define('dashboard-main', DashboardMain);