const abilities = [
  {
    key:'brain',part:'鱼脑',title:'我已经有一套自己的工作流',summary:'做「夏小曼 AI版」，我把复盘、选题、内容和封面慢慢做成了几个 Skill。',
    story:'我做自媒体，已经有一套自己的工作流。\n\n先复盘。用内容复盘 Skill 的月报，把做过的内容进行复盘和沉淀，也找到自己喜欢、想继续做的方向。\n\n再选题。结合选题 Skill，利用 AI 工具进行选题扫描，找到可以展开的内容。\n\n然后写内容。用展开写内容 Skill 来写，再从选题的利他性、话题热度等几个维度检测内容，给出优化建议，我再继续打磨。\n\n最后做封面。用封面 Skill 做有 CTA 的标题；用自己的照片时，保留人物、修改背景。封面还是会反复改几个版本，最后由我判断。',
    thinking:'有些工作做着做着，会觉得自己是在系统性地搬运信息。也是从那个时候开始，我会想，这件事能不能交给 AI，工作能不能重新设计一下。',
    tags:['复盘与选题 Skill','内容检测与优化','封面 Skill'],
    links:[{label:'逛逛东野圭吾纪念馆',url:'https://xiaxiaojie1989.github.io/higashino-archive/'},{label:'看我的小红书主页',url:'https://xhslink.cn/o/1HvfocvclYC'}],
    linkNote:'截至 2026 年 11 月 1 日，账号累计收到 1,540 次赞与收藏。',
    extra:[
      {title:'东野圭吾纪念馆，是怎么做出来的',paragraphs:['我平时主要用 GPT，在里面有自己的新媒体内容 Project，也有已经比较成熟的小红书封面图 Skill。','做东野圭吾纪念馆的时候，我先跟 GPT 交流，把想法一点点挖出来，再一起做成网站。网站文件可以让它打包好，我再直接上传 GitHub。后续做内容和封面，就结合已有的 Project 和 Skill 来完成。','网站最后的呈现是我来判断。封面的关键词、CTA 也需要反复打磨，虽然有 Skill，还是会有“抽卡”的时候，所以也改了好几个版本。']},
      {title:'我是怎么用 AI 打破信息茧房的',paragraphs:['我做每日新闻，是希望打破自己的信息茧房。最初收到的基本是路透社的英文新闻，后来我就根据这个目的，让它加入不同信源，也逐步调整成中文和英文的，再增加每周深度新闻。','我会看实际收到的内容，再去调整要求。哪些信息进来、用什么语言、读到多深，这些都需要根据自己的目的慢慢改。']},
      {title:'工作里，我也会这样用 AI',paragraphs:['Excel 里的数据处理和分析，我会交给 AI 来做，省去一些复杂公式的操作。中间需要手工做的图表，也已经让 AI 来帮忙了。','周报也是根据实际数据，让 AI 帮我做解读。','有创意或视觉想法的时候，我会先用 AI 做几个 reference，把想法先呈现出来。']}
    ]
  },
  {
    key:'eye',part:'鱼眼',title:'先想清楚，需要找什么人',summary:'最初也不知道开一家店要做到什么程度，所以先找了专业的公司。',
    story:'TOC（Taste of China）是我参与筹备和运营的上海沉浸式餐饮项目。最初我们想从行业里找一家专业公司一起做，有点像找 agency，也一起做测算模型。\n\n但做着做着发现，餐厅运营是长期的事情。代运营频繁换对接人，对项目的投入也不够，需要有真正懂业务、愿意一直深耕的人在，所以后来我们找了店长。',
    thinking:'对我来说，要先看这个业务需要做到什么程度，再看需要什么样的人。做起来之后，也会发现原来的安排有需要调整的地方。',
    tags:['代运营到店长','长期业务负责人','选人和判断'],
    extra:[{title:'采购专员，也经历过重新找人',paragraphs:['招采购专员的目的很明确：降低库存差异率，同时按照集团的合规要求来做。第一位适应了大半个月，表格这些基础工作还是比较吃力，我判断不太适合。','后来我重新找了一位本科学历、有餐饮经验，也做过连锁店店长的人。这个岗位还要跟各个档口沟通，所以性格也需要比较外向。懂餐饮现场、能处理表格，也能跟大家沟通，都是我选人时会考虑的。']}]
  },
  {
    key:'bone',part:'鱼骨',title:'把工作拆开，让大家各自发挥',summary:'店长做他擅长的销售，采购和日常事务由团队配合。',
    story:'店长擅长承接包场，也有人脉，但对大公司的运作和合规要求不太熟悉。所以我会招人、分权：采购交给专业采购来做，一些日常事务交给副店长。\n\n副店长原来主要负责预订和现场服务。后来她慢慢可以直接对接增长组、财务这些集团里的职能部门，也能判断哪些事情自己推进，哪些需要上升到我这里。',
    thinking:'我觉得，把一个人放在合适的位置，再把他需要的支持补上，事情就会顺很多。副店长也在多承担事情的过程中得到了锻炼。',
    tags:['店长的销售优势','采购专业分工','副店长成长']
  },
  {
    key:'fin',part:'鱼鳍',title:'让大家了解这个业务怎么做',summary:'餐厅实操起来，和集团里的其他业务有很多不同。',
    story:'店长不太理解大公司的运作方式，跟内部团队沟通时，大家也会觉得他难以沟通。\n\n我会跟 HR、财务、内控、采购讲，我们这个业务有什么特殊性，实际做起来和集团其他业务有什么不同。也让大家了解他的长处和难处，再一起把流程和分工理顺。',
    thinking:'有些事情需要先把实际情况讲清楚，让大家理解对方为什么会这样做，再一起找到能往下推进的办法。',
    tags:['HR 与财务','内控与采购','业务和职能的沟通'],
    extra:[{title:'我做过的其他协同项目',paragraphs:['在携程，我也参与了全球品牌升级、海外发布会这些跨团队项目。再往前，有美团商业化和 MCN 创业的经历。']}]
  },
  {
    key:'tail',part:'鱼尾',title:'把事情往前推，也看实际变化',summary:'采购调整之后，库存差异率有了变化。',
    story:'采购交给专业采购来做后，我们以库存差异率为目标，逐步完善流程。接手第三个月，库存差异率相比前两个月相对下降了 10%。\n\n副店长承担起了更多日常事务，很多简单的事情能落地。店长也发挥了他在客户和活动上的长处，承接过麦卡伦新品发布会、江西文旅推介会等包场活动。',
    thinking:'我会看调整以后，事情有没有更顺、问题有没有改善。涉及跨团队协调、影响比较大的事情，需要我出面的时候，我也会直接去推动。',
    tags:['库存差异率相对下降 10%','日常事务落地','包场活动'],
    extra:[{title:'一个需要我出面的具体例子',paragraphs:['有一次，套餐原本只测试 10 天，结果开了一个月的库存。副店长发现后，知道这件事需要上升到我这里，由我去跟负责库存的同事沟通。','我当晚就打电话给他们，推动处理。她也慢慢知道，跨团队、影响比较大的事情，什么时候需要 PMO 出面。']}]
  },
  {
    key:'heart',part:'鱼心',title:'把方向说清楚，也理解人的处境',summary:'他其实在这样的分工里也更舒服，只是之前没有这样推动。',
    story:'店长是个很要强的人，对大集团的运作方式也不太熟悉，要让他适应各种合规要求，其实挺难的。有些项目他自己没那么认同，就不太愿意接。\n\n后来我就跟他明确，他在这里的工作方向主要还是销售，发挥他在客户关系和包场上的长处。其他工作拆开，由团队一起解决。他其实在这样的安排里也更舒服，只是之前没有这样去推动。',
    thinking:'他会管理客户预期，明确底线是什么，也有备用方案。活动搭建的时候会一直驻场。我觉得这些长处也需要被大家看见，再把工作方向和责任说清楚。',
    tags:['把方向讲清楚','理解长处和难处','让人发挥所长'],
    extra:[{title:'为什么想做东野圭吾纪念馆',paragraphs:['每个人心中都有自己的东野圭吾。我希望每个人都能留下当下的感觉，每个人独一无二的感觉汇聚在一起，就是很好的纪念。','都说一个人在世界上消失，是从没有人记得开始的。如果能有人记得，就很好。一群有集体记忆的人，放入各自不同的共鸣，我觉得这是一件非常有意思的事情。']}]
  }
];
const visited = new Set(['brain']);
let selectedIndex = 0;
const controls = [...document.querySelectorAll('[data-part]')];
const fields = {number:document.getElementById('detail-number'),part:document.getElementById('detail-part'),title:document.getElementById('detail-title'),summary:document.getElementById('detail-summary'),story:document.getElementById('detail-case'),thinking:document.getElementById('detail-thinking'),tags:document.getElementById('detail-tags')};
const next = document.getElementById('next-part');
function selectAbility(key, updateHash = true) {
  const index = abilities.findIndex(item => item.key === key);
  if (index < 0) return;
  selectedIndex = index;
  const item = abilities[index];
  visited.add(key);
  controls.forEach(control => control.setAttribute('aria-pressed',String(control.dataset.part === key)));
  fields.number.textContent = `${String(index + 1).padStart(2,'0')} / 06`;
  ['part','title','summary','story','thinking'].forEach(field => { fields[field].textContent = item[field]; });
  fields.tags.replaceChildren(...item.tags.map(label => { const span=document.createElement('span');span.textContent=label;return span; }));
  document.getElementById('detail-links').replaceChildren(...(item.links || []).map(link=>{
    const anchor=document.createElement('a');anchor.href=link.url;anchor.target='_blank';anchor.rel='noopener noreferrer';
    anchor.textContent=link.label+' ↗';anchor.setAttribute('aria-label',link.label+'（在新标签页打开）');
    return anchor;
  }));
  const note=document.getElementById('detail-link-note');note.textContent=item.linkNote || '';note.hidden=!item.linkNote;
  document.getElementById('detail-extra').replaceChildren(...(item.extra || []).map(example => {
    const details=document.createElement('details');
    const summary=document.createElement('summary');summary.textContent=example.title;details.append(summary);
    example.paragraphs.forEach(text=>{const paragraph=document.createElement('p');paragraph.textContent=text;details.append(paragraph);});
    return details;
  }));
  const nextItem = abilities[(index + 1) % abilities.length];
  next.replaceChildren(document.createTextNode(`继续认识${nextItem.part} `));
  const arrow=document.createElement('span');arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');next.append(arrow);
  document.getElementById('explore-count').textContent = `已探索 ${visited.size} / 6`;
  if(updateHash) history.replaceState(null,'',`#${key}`);
}
controls.forEach(control => control.addEventListener('click',() => selectAbility(control.dataset.part)));
next.addEventListener('click',() => selectAbility(abilities[(selectedIndex+1)%abilities.length].key));
const initialKey = location.hash.slice(1);
selectAbility(abilities.some(item=>item.key===initialKey)?initialKey:'brain',false);
window.addEventListener('hashchange',()=>selectAbility(location.hash.slice(1),false));
document.getElementById('copy-email').addEventListener('click',async()=>{
  const status=document.getElementById('copy-status');
  try {await navigator.clipboard.writeText('xiaxiaojiesherry@gmail.com');status.textContent='已复制';}
  catch {status.textContent='请长按或选中邮箱复制';}
});
