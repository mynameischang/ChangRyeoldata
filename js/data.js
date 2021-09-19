

const qnaList = [
  {
    q: '1. 성별을 입력해주세요',
    a: [
      { answer: '남', type: [0,1] },
      { answer: '여', type: [1,2] },

    ]
  },
  {
    q: '2.당신의 나이대를 입력해주세요',
    a: [
      { answer: '10~20', type: [0,1] },
      { answer: '20~30', type: [1,2] },
      { answer: '30~40', type: [4] },
    ]
  },
  {
    q: '3.담배를 핀다? 안핀다?',
    a: [
      { answer: '핀다', type: [0] },
      { answer: '안핀다', type: [1] },
      { answer: '폈었다가 끈었다', type: [2,4] }
    ]
  },
  {
    q: '4. 오래 살고 싶은가?',
    a: [
      { answer: '될되로 되라 인생', type: [0] },
      { answer: '아무 생각이 없다', type: [1] },
      { answer: '천년만년 살것이다', type: [2,4] },
    ]
  },
  {
    q: '5. 음주는 얼마나 하나',
    a: [
      { answer: '주 0~1회', type: [0] },
      { answer: '주 2~3회', type: [1]},
      { answer: '매일 마신다', type: [2,4] },
    ]
  }


]

const infoList = [
  {
    name: '1년뒤 사망',
    desc: '1년뒤사망'
  },
  {
    name: '2년뒤사망',
    desc: '2년뒤사망합니다'
  },
  {
    name: '3년뒤 사망',
    desc: '3년뒤사망합니다'
  },
  {
    name: '4년뒤 사망',
    desc: '4년뒤사망합니다'
  },
  {
    name: '5년뒤사망',
    desc: '5년뒤사망합니다'
  }

]
