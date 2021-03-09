class NewsList extends HTMLElement {
    constructor() {
        // 부모 오브젝트의 함수를 호출할때 사용된다. 
        // (자바스크립트 에서는 super는 부모 클래스 생성자를 가리킨다)
        // super을 선언 하기 전까지 constructor 에서 this 키워드를 사용할수 없다!! *중요
        super();

        // shadow dom 만들기
        this.attachShadow({ mode: 'open' });

        // templete과 같음 style도 scoped
        this.shadowRoot.innerHTML = `
            <div class="news-list">
                <dl>
                    <dt><slot name="title"></slot></dt>
                    <dd><slot name="date"></slot></dd>
                </dl>
                
                <div class="news-content">
                    <dl>
                        <dt><slot name="news-title"></slot></dt>
                        <dd><slot name="news-content"></slot></dd>
                    </dl>
                </div>
            </div>

            <style>
                .news-list {
                    display: block;
                    padding: 10px;
                    margin-bottom: 10px;
                    font-size: 15px;
                    letter-spacing: -1px;
                    background-color: #fff;
                    border: 1px solid black;
                    border-radius: 5px;
                }
                .news-list.on {
                    display: inline-block;
                }
                .news-list dl {
                    cursor: pointer;
                }
                .news-list dl dt {
                    margin-bottom: 3px;
                    font-weight: bold;
                }
                .news-list dl dd {
                    font-size: 14px;
                    text-align: right;
                }
            </style>
        `;
    }

    /**
     * 가상 트리가 document 에 연결된후 콜백
     */
    connectedCallback() {
        this.shadowRoot.querySelector('.news-list dl dt').style.color
            = this.getAttribute('fontcolor');
    }
}

customElements.define('news-list', NewsList);
