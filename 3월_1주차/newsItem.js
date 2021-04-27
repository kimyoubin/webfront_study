class NewsItem extends HTMLElement {
    constructor() {
        // 부모 오브젝트의 함수를 호출할때 사용된다. 
        // (자바스크립트 에서는 super는 부모 클래스 생성자를 가리킨다)
        // super을 선언 하기 전까지 constructor 에서 this 키워드를 사용할수 없다!! *중요
        super();

        // shadow dom 만들기
        this.attachShadow({ mode: 'open' });

        // templete과 같음 style도 scoped
        this.shadowRoot.innerHTML = `
            <div class="news-item">
                <dl>
                    <dt><slot name="title"></slot></dt>
                    <dd><slot name="content"></slot></dd>
                </dl>
            </div>

            <style>
                .news-item {
                    display: block;
                    padding: 10px;
                    margin-bottom: 10px;
                    font-size: 15px;
                    letter-spacing: -1px;
                    background-color: #fff;
                    border: 1px solid black;
                    border-radius: 5px;
                }
                .news-item.on {
                    display: inline-block;
                }
                .news-item dl {
                    cursor: pointer;
                }
                .news-item dl dt {
                    margin-bottom: 10px;
                    font-weight: bold;
                }
                .news-item dl dd {
                    margin: 0;
                    font-size: 14px;
                    text-align: left;
                }
            </style>
        `;
    }

    /**
     *  커스텀 엘리먼트가 생성될때 실행된다.
     */
    connectedCallback() {
        this.shadowRoot.querySelector('.news-item dl dt').style.color
            = this.getAttribute('fontcolor');
    }
}

customElements.define('news-item', NewsItem);
