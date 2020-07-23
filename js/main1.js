(() => {       

    let yOffset = 0; // windpw/pageYOffset 대신 쓸 변수
    let prevScrollHeight = 0; // 현재 스크롤 위치 보다 이전에 위치한 스크롤 섹션들의 높이의 합
    let currentScene = 0; //현재의 scene 

    const sceneInfo = [
        {//0
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0')
            }

        },
        {//1
            type: 'normal',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1')
            }

        },
        {//2
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2')
            }

        },
        {//3
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3')
            }

        },
    ];
    function setLayout() {
        for (let i = 0; i < sceneInfo.length; i++) {
                sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight,
                sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        };
    }

    function scrollLoop() {
        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }
        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            currentScene++;
        }
        if (yOffset < prevScrollHeight) {
            if(currentScene === 0) return;
            currentScene--;
        }
        console.log(currentScene);
    }

    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    })
    setLayout();
})()