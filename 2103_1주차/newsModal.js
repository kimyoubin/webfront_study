class NewsModal extends HTMLElement {
    constructor() {
        // 부모 오브젝트의 함수를 호출할때 사용된다. 
        // (자바스크립트 에서는 super는 부모 클래스 생성자를 가리킨다)
        // super을 선언 하기 전까지 constructor 에서 this 키워드를 사용할수 없다!! *중요
        super();

        // shadow dom 만들기
        this.attachShadow({ mode: 'open' });

        // templete과 같음 style도 scoped
        this.shadowRoot.innerHTML = `
            <div class="news-modal">
                <div class="news-modal-box">
                    <a href="#none">x</a>
                    <dl>
                        <dt><slot name="news-title"></slot></dt>
                        <dd><slot name="news-content"></slot></dd>
                    </dl>
                </div>
            </div>

            <style>                
                .news-modal {
                    display: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    z-index: 10;
                }
                .news-modal-box {
                    position: relative;
                    width: 500px;
                    height: 500px;
                    padding: 50px;
                    border-radius: 50px;
                    background-color: #fff;
                }
                .news-modal dt {
                    margin-bottom: 30px;
                    color: blue;
                    font-weight: bold;
                }
                .news-modal dd {
                    margin: 0;
                }
                a {
                    position: absolute;
                    top: 30px;
                    right: 30px;
                    text-align: right;                    
                    color: #000;
                    font-weight: bold;
                    font-size: 20px;
                }
                a:link {
                    text-decoration: none;
                }
            </style>
        `;
    }

    /**
     * 가상 트리가 document 에 연결된후 콜백
     */
    connectedCallback() {
        // 여기서 this.shadowRoot는 .news-modal
        this._newsModal = this.shadowRoot.querySelector('.news-modal');

        // .news-modal 의 a를 클릭할때 .news-modal에게 hideModal()함수를 bind시킨다.
        this.shadowRoot.querySelector('a').addEventListener('click', this.hideModal.bind(this));

        _newsModal.style.backgroundColor
            = this.getAttribute('bgColor');
        
    }
    
    hideModal() {
        this._newsModal.style.display = 'none';
    }

    showModal() {
        // console.log(this._newsModal);
        this._newsModal.style.display = 'flex';
    }
}

customElements.define('news-modal', NewsModal);
