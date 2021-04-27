class ToolTip extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <div class="tooltip">
                <dl>
                    <dt><slot name="title"></slot></dt>
                    <dd><slot name="content"></slot></dd>
                </dl>        
            </div>

            <style>
                * { margin: 0; padding: 0;}
                .tooltip {
                    display: none;
                    position: absolute;
                    top: 40px;
                    left: 60px;
                    padding: 10px;
                    font-size: 14px;
                    letter-spacing: -1px;
                    background-color: #fff;
                    border: 1px solid black;
                    border-radius: 10px;
                    z-index: 1;
                }
                .tooltip::before, .tooltip::after {
                    content: '';
                    position: absolute;
                    display: block;
                }
                .tooltip::before {
                    bottom: -10px;
                    left: 40px;
                    border-top: 11px solid #fff;
                    border-left: 11px solid transparent;
                    z-index: 2;
                }
                .tooltip::after {
                    bottom: -12px;
                    left: 39px;
                    border-top: 12px solid black;
                    border-left: 13px solid transparent;
                    z-index: 1;
                }
                .tooltip.on {
                    display: inline-block;
                }
                .tooltip dt {
                    margin-bottom: 3px;
                    font-weight: bold;
                }
            </style>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.tooltip dt').style.color
            = this.getAttribute('fontcolor');
    }
}

customElements.define('tool-tip', ToolTip);
