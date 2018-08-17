<template>
    <div class="board">
        <div class="board-nav">
            <span @click="clickMenu(1)" :class="{select: selected == 1}">주제확인</span>
            <span @click="clickMenu(2)" :class="{select: selected == 2}">최종 결과물 제출</span>
            <span @click="clickMenu(3)" :class="{select: selected == 3}">서비스 조사</span>
            <span @click="clickMenu(4)" :class="{select: selected == 4}">페이스북</span>
        </div>
        <div class="board-sub-menu" :class="`sel${selected}`">
            <div v-if="selected == 1">
                <span :class="{select: subSelected == 1}" @click="clickSubMenu(1)">생활&게임</span>
                <span :class="{select: subSelected == 2}" @click="clickSubMenu(2)">미래산업</span>
            </div>
            <div v-if="selected == 2">
                <span :class="{select: subSelected == 1}" @click="clickSubMenu(1)">생활</span>
                <span :class="{select: subSelected == 2}" @click="clickSubMenu(2)">게임</span>
                <span :class="{select: subSelected == 3}" @click="clickSubMenu(3)">미래산업</span>
            </div>
            <div v-if="selected == 3">
                <span :class="{select: subSelected == 1}" @click="clickSubMenu(1)">생활</span>
                <span :class="{select: subSelected == 2}" @click="clickSubMenu(2)">게임</span>
                <span :class="{select: subSelected == 3}" @click="clickSubMenu(3)">미래산업</span>
            </div>
            <div v-if="selected == 4">
                
            </div>
        </div>
        <div>
            <div v-if="selected == 1" class="subject">
                <div v-if="subSelected == 1">
                    <span>프라이머리 - 자니 (Feat. DYNAMICDUO)</span>
                    <span>작사 다이나믹 듀오(Dynamic Duo) 작곡</span>
                    <span>프라이머리(Primary), 개코 편곡 프라이머리(Primary)</span>
                    <span>
                        여보세요? 어, 동훈아. 나와. 어 개코랑 같이있어 지금. 아냐 우리끼리 소주나 한 잔 하지 뭐. 소박하게. 클럽? 에이, 너 가면 또 잠들 거잖아. 하하. yeah. 일 끝나서 친구들과 한 잔 내일은 노는 토요일이니깐 일 얘기 사는 얘기 재미난 얘기 시간가는 줄 모르는 이 밤 술기운이 올라오니 사내놈들끼린 결국엔 여자 얘기  적적해서 서로의 전화기를 꺼내 번호목록을 뒤져보지  너는 지금 뭐해, 자니, 밖이야? 뜬금없는 문자를 돌려보지 난 어떻게 해볼까란 뜻은 아니야 그냥 심심해서 그래 아니 외로워서 그래 술자리가 끝나가 3차로 이동하기 전인데 문자는(아 진짜 안 온다) 일분 칠분 십분 and 이십분 담배와 애만 태우는 지금 답장 왔어 오빠 나 남친 생겼어 늦었어 좀 일찍 연락하지 그랬어 담에 봐 그냥 담에 낮에 봐 후회할거 알면서 전 여자친구에게 너는 지금 뭐해, 자니, 밖이야? 뜬금없는 문자를 보내보지 난 어떻게 해볼까란 뜻은 아니야 그냥 심심해서 그래 아니 외로워서 그래

                        (최자)
                        아 진짜 술만 들어가면 왜 이렇게 들뜨는지
                        나도 잘 몰라 난 왜 그녀들을 부르는지 갑자기 허전해
                        작업을 걸어대지 여기저기 오늘 밤 나 자존심 다 버렸네
                        전 여친한테 더럽게 달라붙어 봤지만 그녀는 버럭해
                        너 진짜 철없게 언제까지 이럴래 미안해 갑자기 외로운걸 어떡해 
                        껄떡대 껄떡대 나 여기저기 다
                        맘껏 들쑤시고 다녀 온 거릴 거릴 다 
                        또 잠들었어(오) 프라이머리가
                        텐션 떨어진다 동훈아 넌 저리가
                        이제 해가 나올 시간이 되가니까 
                        눈이 녹듯이 사그라드는 기대감
                        너무 지치고 피곤해 자고 싶어 이제 나 첫차를 타고 졸며 집에가

                        (개코)
                        창밖에 앉아 밖을 바라보네 

                        (최자)
                        나는 꾸벅꾸벅 조는데

                        (개코)
                        사람들은 하루를 시작해 

                        (최자)
                        눈부셔 아침해를 보는게

                        (개코)
                        정신은 맑아지지 않는 기분 

                        (최자)
                        아직도 바쁜 내 손가락

                        (개코)
                        아직 손은 바쁘게 움직이지 

                        (최자) 
                        해장국이나 먹고 갈래 오빠랑 

                        (개코)
                        너는 지금 뭐해, 자니, 밖이야?
                        뜬금없는 문자를 보내보지 난
                        어떻게 해볼까란 뜻은 아니야
                        그냥 심심해서 그래 아니 외로워서 그래

                        가지마 제발
                    </span>
                </div>
                <div v-if="subSelected == 2">
                    <span>잠 못드는 밤 (Feat. 펀치(Punch))</span>
                    <span>작사 지훈, 구지안 작곡 코난 (로코베리)</span>
                    <span>편곡 코난 (로코베리)</span>
                    <span>
                        널 사랑하고 있어요
                        혹시 내 맘 안보이나요
                        부디 멀어지지 말아요
                        내 눈물이 떨어지려하니까

                        나는 너를 기다리고 있어
                        같은 자리 같은곳에 있어
                        겨울지나 봄이 오는것처럼 (with you)

                        파도처럼 밀려드는 마음
                        별빛처럼 쏟아지는 눈물
                        내 가슴에 부서져내린다

                        왜 날 사랑하지 않을까 (왜 아닐까)
                        왜 머릿속을 돌아다닐까 (love you)
                        아무말도 난 할 수 없었겠지만
                        ( i don`t wanna cry)

                        우리집앞에 녹색지붕에
                        그집에 니가 혹시 살고 있을까
                        밤새도록 그 집만 쳐다보는걸

                        널 사랑하고 있는데
                        혹시 내 맘 안보이니
                        부디 멀어지지 말아줘
                        내 눈물이 떨어지려하니까
                        자주입던 외투 낡은 갈색의 자
                        집에 가는 버스 자주가던 식당
                        이 모든것이 다 너에 대한 기억
                        i remember you

                        너의 단골술집 인디들의 노래
                        오래된 스웨터 빨간색 목도리
                        이모든것이 다 너에 대한 기억
                        you know?

                        비가 오면 피할곳을 찾듯
                        힘이 들면 잠시 쉬어가듯
                        너의 뒤를 나 항상 지켜줄텐데(with you)

                        시간은 벌써 저녁을 지나
                        고요하게 세상은 눈감아
                        나 혼자만 널 향한 불면증

                        나 혼자 외딴섬인가
                        아니면 내 마음에 감옥을 또 지었나
                        사랑한 죄로 받는 벌이기엔 너무 가혹해
                        내 맘을 증오해
                        i know it love is pain
                        파란색 외투속에 구겨놓은 편지
                        끝내는 못전할 내 마음의 진실
                        외로운 내 빈방
                        혼자서 고백하는 슬픈 오늘밤
                        널 사랑해

                        널 사랑하고 있는데
                        혹시 내 맘 안보이니(보이지 않니)
                        부디 멀어지지 말아줘
                        내 눈물이 떨어지려하니까

                        tonight i wanna cry oh lady tell me why
                        나 잠못드는 외로운 이밤

                        tonight i wanna cry oh lady tell me why
                        널 생각하면 쓸쓸한 이밤 
                    </span>
                </div>
            </div>
            <div v-if="selected == 2">
                최종 결과물 제출
            </div>
            <div v-if="selected == 3">
                서비스 조사
            </div>
            <div v-if="selected == 4">
                페이스북
            </div>
        </div>
    </div>    
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class Board extends Vue {
    selected = 1;
    subSelected = 1;
    
    created() {
        console.log("Board!");
    }
    clickMenu(value: number) {
        this.selected = value;
        this.subSelected = 1;
    }
    clickSubMenu(value: number) {
        this.subSelected = value;
    }
}
</script>
<style lang="scss">
.board {
    position: absolute;
    top: calc(50% - 300px);
    left: calc(50% - 390px);

    width: 780px;
    height: 600px;;

    border: 1px solid #4d57d0;
    border-radius: 10px;

    background-color: #11161d;
    border-image: linear-gradient(45deg, #cf59ba, #4d57d0);
    background-image: linear-gradient(#11161d, #11161d), radial-gradient(circle at bottom left, #cf59ba,#4d57d0);
    background-origin: border-box;
    background-clip: content-box, border-box;

    & > div:nth-child(1) {
        font-family: 'Noto Sans Kr';
        font-size: 16px;
        font-weight: bold;
        height: 68px;
        background: linear-gradient(to right, #cf59ba, #4d57d0);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        display: flex;
        align-items: center;

        & > span {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px;
            border: 0px solid #11161d;
            border-radius: 30px;
            cursor: pointer;
            
            &.select {
                height: calc(100% - 20px);
                font-size: 16px;
                background-color: #11161d;
                color: white;
                
            }
        }
    }

    & > div:nth-child(2) {
        border-bottom: 2px solid #303a47;
        height: 48px;
        position: relative;

        &::after {
            content: "";
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 6px 10px 6px;
            border-color: transparent transparent #11161d transparent;
            position: absolute;
            bottom: 100%;
        }
        
        &.sel1 {
            & > div {
            margin-left: 97.5px - 45px;
            }
            &::after {
                left: 97.5px - 5px;
            }
        }
        &.sel2 {
            & > div {
                margin-left: 195px + 97.5px - 45px;
            }
            &::after {
                left: 195px + 97.5px - 5px;
            }
        }
        &.sel3 {
            & > div {
            margin-left: 195px + 195px + 97.5px - 45px;
            }
            &::after {
                left: 195px + 195px + 97.5px - 5px;
            }
        }
        &.sel4 {
            & > div {
            margin-left: 195px + 195px + 195px + 97.5px - 45px;
            }
            &::after {
                left: 195px + 195px + 195px + 97.5px - 5px;
            }
        }

        & > div {
            display: flex;
            height: 100%;
            align-items: center;
            
            & > span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 90px;
                height: 100%;
                text-align: center;
                font-size: 14px;
                color: #303a47;
                cursor: pointer;

                &.select {
                    color: white;
                    position: relative;
                    &::after {
                        content: "";
                        position: absolute;
                        width: 50px;
                        height: 2px;
                        background: linear-gradient(to right, #cf59ba, #4d57d0);
                        bottom: 5px;
                        left: 20px;
                    }
                }
            }
        } 
    }

    & > div:nth-child(3) {
        padding: 60px 100px 60px 100px;
        color: white;
        font-family: 'Noto Sans Kr';

        overflow-y: scroll;
        height: 477px;
        box-sizing: border-box;
        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background: transparent;
            border-radius: 20px;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 20px;
        }
        & > div > div {
            display: flex;
            flex-direction: column;
        }

        & > div.subject > div {
            & > span:nth-child(1) {
                font-weight: 300;
                font-size: 20px;
                margin-bottom: 17px;
            }

            & > span:nth-child(2), & > span:nth-child(3) {
                font-weight: 300;
                font-size: 17px;
            }
            & > span:nth-child(2) {
                margin-bottom: 5px;
            }
            & > span:nth-child(3) {
                margin-bottom: 17px;
            }

            & > span:nth-child(4) {
                line-height: 1.59;  
                letter-spacing: normal;
                font-weight: 300;
                font-size: 17px;
                font-stretch: normal;
            }
        }
    }
}
</style>
