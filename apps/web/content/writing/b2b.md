<details>
<summary>SaaS 2.0</summary>

One way to describe Salesforce’s flagship product—their customer relationship management tool, in which salespeople keep track of who they’re selling to and how those deals are going—is that it is a bunch of lists. People make this point sometimes: Salesforce is [just a database](https://news.ycombinator.com/item?id=32808400) with a [point-and-click](https://x.com/ianb/status/1407237307170648067) user interface [on top](https://news.ycombinator.com/item?id=20278157). Businesses buy Salesforce to help their sales teams sell stuff, and when a business wants to sell stuff, they need to maintain a bunch of interconnected lists: Of companies they’re selling to, of their clients’ email addresses and phone numbers, of the products they sell, of the messages they've sent their prospects and the meetings they’ve had with them, and of various other things that you might imagine salespeople wanting to write down. The database part of Salesforce maintains those lists, and the interface part of Salesforce lets you look at and update those lists. But you could, as people sometimes suggest, also do all of this in [a big spreadsheet](https://www.reddit.com/r/salesforce/comments/k8hl3c/is_salesforce_just_a_big_spreadsheet/).

This isn’t exactly wrong—Salesforce does have a lot of lists, and most of the time, people log into Salesforce so that they can read or change the lists. Still, reliably keeping track of lists can be [very hard](https://www.bloomberg.com/opinion/articles/2023-07-25/keeping-track-of-bank-accounts-is-hard). Keeping big, dynamic lists in Google Sheets would be complicated and brittle, and Salesforce probably does a better job of it than [Jeff](https://benn.substack.com/p/the-return-of-the-modern-data-stack#footnote-5-157625068). So people pay Salesforce [$37.9 billion](https://s205.q4cdn.com/626266368/files/doc_financials/2025/ar/Salesforce-FY25-Annual-Report.pdf) a year, for a bunch of lists.

But another way to describe Salesforce is as a *playbook*. Selling stuff to people—especially big stuff; especially if you’re selling it to large companies; especially if many people are involved in closing a deal—is a complex operation that requires a lot of coordination and collaboration. Salespeople have to identify potential buyers; they have to find ways to get introduced to the those buyers; they have to have pitch meetings, and prep meetings, and debrief meetings, and meetings at fancy steakhouses. They have to make materials for those meetings; they have to follow up, circle back, touch base, check in. There are motions to all of this, and various sales experts have developed recommended frameworks—[BANT](https://www.salesforce.com/blog/what-is-bant-lead-generation/), [CHAMP](https://www.salesmate.io/blog/champ-methodology/), [FAINT](https://www.revenue.io/inside-sales-glossary/what-is-faint), [NEAT](https://www.lucidchart.com/blog/neat-selling-explained), [SPICED](https://www.dialpad.com/glossary/spiced-sales-methodology/), [SPIN](https://www.salesforce.com/blog/spin-selling/), [YHTMAAAIYP](https://paulkrugman.substack.com/p/is-there-a-tariff-end-game?utm_source=publication-search#:~:text=A%20colleague%20of%20mine%20used%20to%20return%20student%20papers%20with%20the%20comment%20YHTMAAAIYP%20%E2%80%94%20%E2%80%9Cyou%20have%20too%20many%20acronyms%20and%20abbreviations%20in%20your%20paper.%E2%80%9D)—for how to manage it.

And Salesforce, via the product’s vocabulary, features, and defaults, is a loose encoding of those recommended processes. To close a deal in Salesforce, you have to create an “opportunity,” which is associated with an “account,” and pass that opportunity through a series of default “stages.” Certain important fields, like the amount that a deal is worth, have to be filled out before you can add it to Salesforce’s list of contracts. There are [default forecasting categories](https://help.salesforce.com/s/articleView?id=sales.forecasts3_customizing_forecasts_categories.htm&type=5) that are considered industry standards. So, sure, Salesforce helps people sell stuff by keeping lists, but it also helps people sell stuff by keeping *opinionated* lists. The lists have specific names; the lists are governed by pedantic rules. The lists help you sell stuff by existing, but they also help you sell stuff by telling you, roughly speaking, *how* to sell stuff.

Lots of software [follows the same pattern](https://x.com/martin_casado/status/1943114260575588764).[1](https://benn.substack.com/p/saas-20#footnote-1) It helps you accomplish something—sell stuff, manage tasks, remember your thoughts, date people—through both a mechanical utility—it maintains lists, logs to-dos, stores your notes, shows you pictures of people you might like—*and* some sort of embedded expertise. The builders of Salesforce were (or talked to) expert salespeople; they decided that the best sales teams follow a particular process when they’re out in the field; they then built lists in Salesforce that guide people towards that process. Linear, a task management application, did the same with product teams and engineers; now, Linear not only keeps track of your tickets, but it also tells you [how you should prioritize them](https://linear.app/docs/priority#:~:text=We%20don%27t%20have,or%20use%20labels.). Roam, a note-taking product, believes it’s more useful to imagine your notes as a network of ideas rather than a filing cabinet of documents, so Roam encourages its users to interconnect their notes [through backlinks](https://roamresearch.com/#/app/help/page/dZ72V0Ig6). Hinge, a dating app,[2](https://benn.substack.com/p/saas-20#footnote-2) wants to prevent people from mindlessly swiping, so they require users to like [specific parts of someone else's profile](https://hinge.co/mission#:~:text=Conversation%20Starters).

But this is all somewhat rough and indirect. First, Salesforce isn't made for *your* sales team; it's made for *a* sales team, for the [median](https://en.wikipedia.org/wiki/Median_voter_theorem) sales team. Your sales team may not want to use [MEDDIC](https://www.salesforce.com/blog/meddic-sales/), a popular sales discovery framework, to evaluate deals; they might want to use [MED](https://www.supernormal.com/blog/medpicc)[*PICC*](https://www.supernormal.com/blog/medpicc)*.* But MEDDIC is more common, so Salesforce’s defaults will prefer that.[3](https://benn.substack.com/p/saas-20#footnote-3) Second, Salesforce has to paraphrase their expertise through product features. Advice like “make sure to define a [compelling event](https://meddicc.com/resources/the-necessity-of-a-compelling-event) when you’re trying to close a deal” could get reflected in Salesforce through rules that require salespeople to define a target close date when they create a new selling opportunity. But people might work around that by always choosing a close date that’s three months in the future, just so that they have something to put in form. Nudges can encourage good behavior, but nudges can be ignored. And finally, Salesforce’s rules are blunt instruments. [From Matt Slotnick](https://mslotnick.substack.com/p/data-rules-everything-around-me-the):

> To move a prospect between sales, a lot happens. But the way it’s reflected in application is quite simple, necessarily. The seller will do a ton of work (research, meeting, emails, powerpoints, etc) that ultimately gets recorded in the system in a fairly simple way… from Stage 1 to Stage 2… Prospecting to Qualification… with a few mandatory fields to fill out.
>
> But the texture, the granularity of what happened, is largely lost because there’s no way for the system as designed to comprehend or make use of it.

So. If you wanted to sell stuff, what would be better than buying Salesforce? One answer might be to buy a very customized version of Salesforce that is designed to fit exactly what you need. And for a long time, people have tried to mimic this, by hiring Salesforce consultants to tailor their versions of Salesforce to fit the way they want to sell.[4](https://benn.substack.com/p/saas-20#footnote-4)

A second answer could be to build an entirely new version of Salesforce, [just for you](https://x.com/ryolu_/status/1943235623252267072). Don’t buy *a* Salesforce; [vibe code](https://docs.google.com/document/d/103cGe8qixC7ZzFsRu5Ww2VEW5YgH9zQaiaqbBsZ1lcc/edit?tab=t.0) [*your*](https://docs.google.com/document/d/103cGe8qixC7ZzFsRu5Ww2VEW5YgH9zQaiaqbBsZ1lcc/edit?tab=t.0) [Salesforce](https://docs.google.com/document/d/103cGe8qixC7ZzFsRu5Ww2VEW5YgH9zQaiaqbBsZ1lcc/edit?tab=t.0):

> LLMs…will drive the cost of creating software to zero. What happens when software no longer has to make money? We will experience a Cambrian explosion of software, the same way we did with content.
>
> Vogue wasn’t replaced by another fashion media company, it was replaced by 10,000 influencers. Salesforce will not be replaced by another monolithic CRM. It will be replaced by a constellation of things that dynamically serve the same intent and pain points.

But there’s third—and maybe even better?—way to replace Salesforce: Don’t use it all. What if, rather than buying Salesforce’s product, you just hired Salesforce's sales experts and had them manage all your lists directly? Instead of buying a very approximate version of their expertise, delivered through oblique suggestions in a piece of software, could you just buy the experts themselves?

If you have the experts, there’s no need for opinionated lists. They sit between you and the lists, and *they* can organize their lists however they want, or enforce whatever pedantic rules they like. *You* don’t need to know about any of it. You just tell them what’s going on, and they figure out how to keep track of it. If you want to add a new prospect to your lists, you tell them to do it, and they record the details in the proper places. And if they don’t like how you’re doing something—if you try to create a sales opportunity without identifying a compelling event, and that troubles them—they can just tell you that, and what you should do to fix it.

Compared to Salesforce, the experts with lists are more directly helpful, because they don’t have to translate their recommendations into product features.[5](https://benn.substack.com/p/saas-20#footnote-5) They’re more precise, because they can tell you, per Slotnick’s concern, when things are halfway between stages or when something doesn’t fit into an exact taxonomy. And they’re more flexible, because they can adjust their advice to your business and circumstance. Maybe this deal doesn’t need an amount attached to it, because it’s for a partner account. Maybe this deal should be forecasted as “Commit,” despite missing some of the usual qualification criteria, because they know the sales rep has a close relationship with the buyer. Maybe this deal shouldn’t be recorded at all, because [it's a bribe](https://www.wsj.com/business/media/paramount-executives-ask-could-they-be-sued-for-settling-trumps-20-billion-cbs-lawsuit-228604a2). Salesforce doesn't allow for these exceptions. People with spreadsheets and good judgement do.

Of course, this is all somewhat impractical. You can’t hire Salesforce’s employees directly.[6](https://benn.substack.com/p/saas-20#footnote-6) And even if you could, a couple of people, no matter how good they were at sales stuff, couldn’t keep track of everything a sales team does. But if you could hire an *infinite* number of experts, each of whom had an unwavering attention span, an unrelenting attention to detail, and the ability to read really fast…

You can see where this is going.

Rather than building opinionated lists to help people sell stuff, you could imagine Salesforce building a completely different product to do the same job: AI bots explicitly instructed on how to run a good sales process, and a bunch of spreadsheets. Every morning, the bots check their spreadsheets. They tell you who they think you should call. Before each meeting, they tell you where the deal currently stands, and share some facts about it from their lists. After each call, you tell them how it went and what they should change. They meticulously update the lists, in accordance with whatever best practices they've been told to follow, while also making reasoned judgements about where to allow for exceptions.

Rather than being a database and a UI that’s inspired by a suggested operational workflow, Salesforce would instead be a database and an explicit description of that workflow. It is the expertise of Salesforce’s team, written down as words. The product is the prompt, and the prompt is [the last sales guide you’ll ever need](https://www.salesforce.com/eu/resources/research-reports/how-to-sell-ebook/).

Which, admittedly, might sound uncomfortable. [If it’s not in Salesforce, it didn’t happen!](https://mark-62118.medium.com/if-its-not-in-salesforce-it-didn-t-happen-21595dde9379) We need to see the lists! We need to check the lists, to touch the lists, and know they’re real! We can’t put robots between us and our lists!

But can we? Our reliance on seeing lists in Salesforce (or in Linear, or Roam, or any other app) feels more like a security blanket than a genuine need. We compulsively look at the lists because we haven’t had any other way to run a sales team, so we begin think that compulsively checking the list and running a sales team are the same thing.

But consider, for example, email. If you don’t care that much about managing your emails, you use Gmail, do nothing, and end up with [606,646](https://www.reddit.com/r/GMail/comments/1l9kjl6/i_have_606646_unread_emails_in_my_gmail_inbox_who/) unread messages in your inbox. If you are moderately important,[7](https://benn.substack.com/p/saas-20#footnote-7) you buy Superhuman and it does various things to cajole you into [organizing all of your emails](https://blog.superhuman.com/inbox-zero-method/).[8](https://benn.substack.com/p/saas-20#footnote-8) But if you are actually important, you hire an executive assistant, and they manage your emails for you. And you don’t care if they use Superhuman, or Gmail, or [run an email server on a Gameboy](https://www.youtube.com/shorts/guA82ewB9n8). You don’t care how they tag and triage emails, or if they keep your inbox at 0 or at 606,646. You hire them because they are experts at managing and filtering lists of emails, and you let them do that however they want. And if you trust your EA, you stop checking the list.[9](https://benn.substack.com/p/saas-20#footnote-9)

Could the same trust not extend into other workflows, and around other things we do? If the best way to manage our emails is not a fancy email client, but an email expert with access to our inbox, could the best way to manage other parts of our lives be an “expert” with a spreadsheet?

Anyway, there’s [a new dating app](https://techcrunch.com/2025/06/25/sitch-wants-to-fuse-human-personality-and-ai-for-matchmaking/):

> Today’s dating apps bank on the speed of onboarding and having millions of options. Users create profiles within seconds by uploading photos and answering simple questions. The apps then rely on basic info and feedback from users’ swipes to find them potential matches.
>
> Sitch aims to take a more thoughtful approach with its onboarding process and uses large language models (LLMs) to bring a human matchmaker’s expertise to the dating app experience, helping people find potential matches without swiping.
>
> The startup was co-founded by Nandini Mullaji, whose knack for the dating market comes from her grandmother, also a matchmaker.
>
> …
>
> Essentially, Sitch built an AI version of Mullaji that helps users onboard by asking them details using almost 50 questions, which they can answer through text or voice.
>
> After the dater’s profile is set up, the AI matchmaker displays its suggested matches. If both users agree to match with each other, the bot adds them to a group chat with the AI. At any point in time — even after their real-life dates — users can provide feedback about their matches to improve the AI’s personalization.

Right, exactly—most dating platforms are a database of people and their interests, and an app that tries to encourage similar people to talk to each other through things like suggested matches and how profiles are presented. Sitch is an expert with a spreadsheet. It’s a model that is told Mullaji’s matchmaking secrets and each user’s preferences,[10](https://benn.substack.com/p/saas-20#footnote-10) and then tries to assess if each person on one side of the dating pool is a good match with each person on the other side. And if it works—if the suggestions are good, which, to be seen, I suppose—then Sitch’s users probably won’t care how the expert manages its lists.

In fact, this is probably the ideal version of an app—or, more generally, the ideal version of software. It’s a thing that I tell what I want, and it manages the rest. It’s an inverted version of SaaS: Not software as a hosted service, nor a custom piece of software that I have to build, but a *service*—a matchmaker, an EA, a sales operations team—that is replicated by software, and software that acts like a specialist and a spreadsheet.

[1](https://benn.substack.com/p/saas-20#footnote-anchor-1)

[As Randy Au points out](https://www.counting-stuff.com/building-less-flexibly-for-better-usability/), expertise isn’t just embedded in software. It’s also in physical products and even physical spaces:

> Most people want the guidance afforded to us by the various cues built into a space. Those cues, leftover shelves on a wall, the placement of a vent, outlet, rug, or even a door, are essentially the built up opinions of the original designer and anyone else that used the space before. Those ideas may not be the absolute *best* use of a given space, but they're at least a sign of something that had worked for someone in the past. That sort of signal has some weight to it.

[2](https://benn.substack.com/p/saas-20#footnote-anchor-2)

A question I have long wondered: How did dating apps become The Apps? Like:

- A: “Do you use the apps?” / B: “Yeah, it’s much easier to call a car than hail a taxi.”
- A: “Do you use the apps?” / B: “No, I prefer to eat out than order DoorDash or Uber Eats.”
- A: “Do you use the apps?” / B: “I do, my doctor’s office finally let me start booking appointments through them.”
- A: “Do you use the apps?” / B: “Bro. I’ve been YOLOing crypto options since Bush’s presidency;\* my Robinhood user ID is four digits; I’ve used the apps for a decade.”

All of these could’ve made sense! There are so many apps! Ride-sharing apps, food delivery apps, booking apps, trading apps! How did dating apps end up as *the* apps?

- [Technically possible!](https://www.history.com/this-day-in-history/october-31/satoshi-nakamoto-publishes-a-paper-introducing-bitcoin)

[3](https://benn.substack.com/p/saas-20#footnote-anchor-3)

Don’t take this example too literally. The point here isn’t about MEDDIC versus MEDPICC—which is somehow [a real thing](https://qwilr.com/blog/meddic-vs-meddpicc/)—but that teams will sometimes want to operate in specialized ways that cut against the grain of a product that’s made for a more general audience. Ready-to-wear clothing can have plenty of stylistic opinions, but it will never fit as well as something made-to-measure.

[4](https://benn.substack.com/p/saas-20#footnote-anchor-4)

This is so popular that the market for Salesforce consultants who build these customizations, at [$18 billion a year](https://www.fortunebusinessinsights.com/salesforce-consulting-service-market-109560), is about 50 percent as large as the market for Salesforce itself.

[5](https://benn.substack.com/p/saas-20#footnote-anchor-5)

They’re also general experts who likely know things about how to design a workflow that you may not. That’s the downside of vibe-coding a custom app. You know yourself, but you may not know the field as well as other people. It’s like making your own clothes—you know what you like, but you probably don’t as good of a general eye as a real tailor.

[6](https://benn.substack.com/p/saas-20#footnote-anchor-6)

Well, *you* can’t. [*He*](https://www.cnbc.com/2025/06/21/metas-zuckerberg-has-to-win-ai-after-billions-spent-on-dream-team.html) can.

[7](https://benn.substack.com/p/saas-20#footnote-anchor-7)

And especially if you want all the people you email [to know](https://x.com/shl/status/1144822973368422400) that you’re moderately important.

[8](https://benn.substack.com/p/saas-20#footnote-anchor-8)

Here’s a question I have, [after this acquisition](https://techcrunch.com/2025/07/01/grammarly-acquires-ai-email-client-superhuman/): How will Superhuman deal with grammatical typos now? On one hand, it’s now owned by Grammarly, whose whole thing is fixing bad grammar. On the other hand, sending rushed emails with bad grammar to show everyone how busy you are has always been Superhuman’s whole thing. Will people want Grammarly recommendations inside of Superhuman? Will they want it to suggest *bad* grammar, to make them look even more rushed and important? If I type “Thanks, Benn” inside of Superhuman, will it tell me to change it to “thx, b”?

[9](https://benn.substack.com/p/saas-20#footnote-anchor-9)

This is a bit of an exaggeration; you might still check your email. But the inbox that you look at can be pretty basic. The same is true of Salesforce—people will still probably want to look at some lists, but they wouldn’t need all of the operational infrastructure around them.

[10](https://benn.substack.com/p/saas-20#footnote-anchor-10)

Another notable difference between Sitch and traditional dating apps is that Sitch apparently has a relatively long onboarding process. But that makes sense: In the specialist-with-a-spreadsheet model of software, you have to “onboard” the specialist in the same way you’d have to work with a real matchmaker or executive assistant. And people are generally perfectly happy to do that, provided that the training makes them good at their jobs.

</details>

## 핵심 가설

기존 도메인 SaaS는 **System of Record, 하드코딩된 도메인 로직, 고정된 UI와 워크플로우**가 하나의 제품으로 결합된 구조였다. 에이전트 시대에는 안정적인 기록 시스템은 유지되지만, 도메인 로직의 일부와 사용자 인터페이스가 상황에 따라 동적으로 구성된다.

> **에이전트 기반 도메인 소프트웨어 = 안정적인 System of Record + 결정론적 핵심 규칙 + 비정형 스킬과 에이전트 + 대화형·생성형 UI**

## 기존 도메인 SaaS의 구조

HR·ERP와 같은 버티컬 SaaS는 대체로 세 층으로 구성된다.

### 1. System of Record

영속적으로 보존해야 하는 신뢰 가능한 상태다.

- 직원과 조직
- 근무 기록
- 휴가 잔여일
- 급여와 수당
- 승인 기록
- 변경 이력

### 2. 도메인 로직

도메인의 법령, 정책, 계산과 업무 규칙이다.

- 국내 노동 법령
- 회사별 취업 규칙
- 연차 발생과 차감
- 초과근무 계산
- 승인 조건
- 급여와 근태의 연결

### 3. 고정된 UI와 워크플로우

모든 사용자가 공통으로 사용하는 기능별 화면과 절차다.

- 근태 현황 패널
- 휴가 신청 폼
- 관리자 승인함
- 리포트 화면
- 설정 메뉴

> **기존 SaaS = 영속적 데이터 + 하드코딩된 도메인 로직 + 고정된 화면과 워크플로우**

## 전문성은 어떻게 제품 기능으로 압축됐는가

기존 SaaS도 단순한 데이터베이스와 UI만 제공한 것은 아니다. 좋은 SaaS에는 해당 분야의 전문가가 축적한 판단 기준, 운영 방식과 플레이북이 들어 있었다. Salesforce에는 영업 전문가의 지식이, HR SaaS에는 노무와 인사 운영의 지식이, Linear에는 제품·개발 조직을 운영하는 방식이 내장되어 있다.

문제는 기존 소프트웨어가 이 전문성을 사용자에게 직접 전달하거나 상황에 맞게 적용할 수 없었다는 점이다. 전문 지식을 확장 가능한 제품으로 만들기 위해서는 반드시 소프트웨어 기능의 문법으로 번역해야 했다.

> **전문가의 판단 → 평균적인 플레이북 → 데이터 모델·필드·상태·규칙·버튼으로 압축 → 사용자가 형식적으로 조작**

예를 들어 영업 전문가의 “거래를 성사시키는 결정적 사건이 무엇인지 확인하라”는 조언은 다음과 같은 기능으로 번역된다.

- `Close date` 필드를 필수로 만든다.
- Opportunity를 정해진 Stage에 따라 이동하게 한다.
- 특정 필드를 채워야 다음 단계로 넘어갈 수 있게 한다.
- Forecast category와 알림을 제공한다.

HR에서도 마찬가지다. “구성원의 실제 근무 맥락과 법령, 회사 정책을 함께 고려해 휴가와 대체휴무를 판단하라”는 전문적 판단은 휴가 유형, 신청 폼, 승인 단계, 계산식과 예외 코드로 압축된다.

이 방식은 전문성을 많은 사용자에게 안정적으로 배포하기 위해 필요했다. 그러나 판단을 기능으로 번역하는 순간 다음과 같은 손실이 발생한다.

### 1. 맥락의 손실

전문가는 거래 관계, 담당자의 경험, 최근 대화와 조직 상황을 함께 보지만, 제품은 이를 몇 개의 필드와 상태로 표현한다.

### 2. 질감과 세분성의 손실

현실의 업무는 Stage 1과 Stage 2 사이에 있을 수 있지만, 시스템은 하나의 상태를 선택하도록 요구한다. 그 과정에서 실제로 무슨 일이 있었는지에 대한 세부적인 정보가 사라진다.

### 3. 평균값으로의 수렴

제품은 특정 회사가 아니라 중앙값에 가까운 회사를 위해 만들어진다. 각 조직의 독특한 플레이북과 예외보다 가장 널리 쓰이는 방식이 기본값이 된다.

### 4. 형식적 준수

사용자는 전문적 판단의 취지를 따르기보다 시스템을 통과하기 위한 값을 입력할 수 있다. 필수 필드에 임의의 값을 넣거나, 실제 상황과 무관하게 상태를 변경하는 식이다.

### 5. 엣지 케이스의 시스템 외부 이탈

정해진 데이터 모델에 맞지 않는 상황은 메신저, 이메일, 회의와 엑셀에서 별도로 처리된다. SaaS에는 최종 상태만 남고, 판단의 과정과 근거는 기록되지 않는다.

즉 기존 SaaS는 전문 지식이 없었던 것이 아니다. 오히려 **전문 지식을 확장하기 위해 제품 기능으로 압축했고, 그 압축 과정에서 현실의 질감과 맥락을 잃었다.**

> **기존 SaaS: 전문가의 판단 → 제품 기능으로 번역 → 사용자가 기능을 조작 → 결과를 레코드에 기록**

에이전트는 이 우회 경로를 줄인다. 전문성을 필드와 버튼에만 간접적으로 새겨 넣는 대신, 플레이북·정책·스킬과 사례로 명시할 수 있다. 에이전트가 현재 상황과 조직의 맥락을 읽고 그 전문성을 직접 적용한 뒤, 필요한 시스템 기능을 스스로 호출한다.

> **에이전트 SaaS: 명시적인 전문성 → 에이전트의 맥락적 판단 → 도구 실행 → 근거와 결과를 감사 가능하게 기록**

따라서 변화의 핵심은 UI가 대화창으로 바뀌는 데만 있지 않다. **전문성이 제품 기능 안에 암묵적으로 압축되어 있던 구조에서, 전문성이 독립된 실행 레이어로 분리되는 것**이 더 본질적인 변화다.

## 천공카드에서 에이전트까지

### 1. 천공카드와 초기 업무 컴퓨터

업무 절차와 데이터 형식이 물리적 구조와 프로그램에 강하게 고정되어 있었다.

- 자유도가 거의 없다.
- 변경 비용이 높다.
- 정해진 업무만 반복적으로 처리한다.

### 2. 엑셀

셀이라는 범용 인터페이스를 통해 사용자가 원하는 데이터 구조와 계산식을 직접 만들 수 있게 됐다.

- 자유도가 높고 예외 상황에 유연하다.
- 사람이 구조와 수식을 직접 관리해야 한다.
- 품질과 정확성이 작성자의 역량에 좌우된다.
- 권한, 감사, 협업과 데이터 정합성이 약하다.

엑셀은 유연하지만 조직의 업무를 안정적으로 운영하기에는 사람에게 너무 많은 책임을 맡긴다.

### 3. 도메인 SaaS

SaaS는 엑셀에서 반복적으로 만들던 업무 구조를 표준화했다.

- 검증된 데이터 모델
- 정형화된 업무 로직
- 일관된 UI
- 권한과 승인
- 감사 기록
- 여러 사용자의 협업

그 대가로 자유도가 줄었다. 모든 회사가 비슷한 화면과 정해진 워크플로우에 맞춰 일해야 했고, 새로운 엣지 케이스가 생기면 SaaS 회사의 기능 개발을 기다려야 했다.

### 4. 에이전트 기반 SaaS

에이전트는 SaaS의 안정성과 엑셀의 유연성을 다시 결합할 가능성이 있다.

- 영속 데이터와 권한은 SoR에 안정적으로 보존한다.
- 정형적인 계산은 결정론적 규칙 엔진이 처리한다.
- 비정형 요청과 엣지 케이스는 에이전트가 문맥에 맞게 해석한다.
- 고정된 메뉴 대신 자연어로 의도를 전달한다.
- 필요한 순간에 작업별 UI를 생성한다.
- 실행 전 승인을 받고 실행 후 감사 기록을 남긴다.

## 모든 도메인 로직이 비정형화되는 것은 아니다

HR·ERP에서 모든 도메인 로직을 LLM에 맡길 수는 없다. 급여, 휴가 잔여일, 법정 수당처럼 결과가 항상 같아야 하는 계산을 확률적으로 처리하면 안 된다.

### 결정론적으로 남아야 하는 것

- 연차 발생 수량
- 근무시간과 초과근무 계산
- 급여와 수당 계산
- 법정 보존 기간
- 권한과 접근 통제
- 회계 원장의 합계
- 승인 완료 여부

이 영역은 코드, 규칙 엔진과 명시적인 제약 조건으로 관리해야 한다.

### 에이전트가 맡기 좋은 것

- 모호한 요청의 해석
- 관련 데이터와 정책 탐색
- 예외 상황 분류
- 적용할 규칙의 선택
- 필요한 추가 정보 질문
- 처리 계획 작성
- 승인 요청과 후속 조치
- 결과 설명과 보고서 작성
- 상황에 맞는 UI 구성

에이전트가 법령이나 계산 공식을 즉흥적으로 만드는 것이 아니다. 에이전트는 **비정형적인 현실을 정형적인 시스템의 명령과 상태 전이로 연결**한다.

> **기존 SaaS에서는 사용자가 올바른 화면과 버튼을 찾아야 했다. 에이전트 SaaS에서는 에이전트가 사용자의 의도를 이해하고 올바른 데이터, 규칙과 기능을 찾아 조합한다.**

## HR SaaS 예시

상사가 대화창에 다음과 같이 요청한다고 가정한다.

> “지난 분기에 야근이 많았던 사람 중 대체휴무 대상자를 정리하고, 각 팀장에게 확인받은 다음 휴가에 반영해줘.”

### 기존 SaaS에서의 처리

1. 근태 리포트 화면을 연다.
2. 기간과 초과근무 조건을 설정한다.
3. 대상자를 엑셀로 내려받는다.
4. 회사의 대체휴무 규정을 확인한다.
5. 대상자를 팀별로 분리한다.
6. 팀장에게 확인을 요청한다.
7. 승인된 사람의 휴가를 직접 입력한다.

### 에이전트 기반 SaaS에서의 처리

1. 요청의 의도를 해석한다.
2. 근태 SoR에서 관련 데이터를 조회한다.
3. 법령과 회사 정책을 적용한다.
4. 모호한 조건이 있으면 추가로 질문한다.
5. 대상자와 계산 근거를 표로 보여준다.
6. 팀장별 승인 요청을 생성한다.
7. 승인 결과를 기다린다.
8. 승인된 항목만 SoR에 반영한다.
9. 변경 내역과 근거를 감사 로그에 남긴다.

사용자는 여러 메뉴를 탐색하는 대신 **업무의 목표를 말하고, 판단이 필요한 지점에서만 개입**한다.

## 고정 UI에서 의도 기반 인터페이스로

대화창은 다음과 같은 작업에 적합하다.

- 의도 전달
- 비정형 요청
- 탐색과 설명
- 예외 처리
- 여러 단계의 업무 위임

하지만 고정되거나 구조화된 UI는 여전히 다음 작업에 유리하다.

- 많은 데이터의 비교
- 반복적인 상태 모니터링
- 대량 편집
- 복잡한 승인 내역 검토
- 감사 기록 확인
- 민감한 작업의 실행 전 검증

따라서 UI가 대화창으로 완전히 대체되는 것이 아니라 다음 구조로 바뀐다.

> **대화로 의도 입력 → 에이전트가 작업 계획 수립 → 필요한 UI를 동적으로 생성 → 사용자가 검토·승인 → 에이전트가 실행**

즉 변화는 **고정된 기능별 UI에서 의도 기반 대화와 작업별 생성형 UI의 결합**으로 보는 것이 정확하다.

## SaaS는 화면 묶음에서 운영 시스템으로 변한다

기존에는 사용자가 SaaS를 화면의 집합으로 경험했다.

- 근태 화면
- 휴가 화면
- 승인 화면
- 리포트 화면

그러나 SaaS의 실질적인 근간은 다음과 같다.

- 도메인 객체
- 상태와 관계
- 권한
- 정책
- 상태 전이
- 감사 기록

에이전트 시대에는 UI가 시스템의 본체가 아니라 특정 순간에 상태를 조회하고 변경하기 위한 인터페이스 중 하나가 된다.

> **기존 SaaS의 제품 단위가 기능과 화면의 묶음이었다면, 에이전트 SaaS의 제품 단위는 안전하게 조작할 수 있는 도메인 상태와 능력의 집합이 된다.**

## System of Record의 가치는 더 커진다

에이전트가 UI와 워크플로우를 유연하게 만들수록 기반 데이터는 더 엄격해야 한다.

- 데이터의 출처
- 최신 상태
- 객체 간 관계
- 권한
- 변경 이력
- 법적 근거
- 정책의 버전
- 실행 결과의 추적 가능성

AI가 SoR을 없애는 것이 아니라 **고정 UI와 SoR의 결합을 해체**한다고 보는 편이 정확하다.

기존 구조:

> SoR + 도메인 로직 + 고정 UI가 하나의 SaaS에 결합

변화한 구조:

> 안정적인 SoR + API·도구 + 결정론적 규칙 엔진 + 에이전트 스킬 + 동적 인터페이스

SoR은 더 중요해지고 고정 UI의 독점력은 약해진다.

## 블랙박스가 아니라 감사 가능한 오퍼레이터

부하직원에게 메시지를 보내면 알아서 처리한다는 비유는 사용자 경험을 설명하기에 좋다. 다만 기업 소프트웨어의 에이전트가 완전한 블랙박스가 되어서는 안 된다.

에이전트는 다음을 보여줄 수 있어야 한다.

- 무엇을 이해했는가
- 어떤 데이터를 조회했는가
- 어떤 정책을 적용했는가
- 어떤 계산을 수행했는가
- 무엇을 변경할 예정인가
- 누구의 승인이 필요한가
- 실제로 무엇을 변경했는가
- 문제가 생기면 되돌릴 수 있는가

> **에이전트 SaaS는 블랙박스 부하직원이 아니라, 자연어로 업무를 위임할 수 있지만 모든 판단 근거와 실행 내역이 기록되는 감사 가능한 디지털 오퍼레이터다.**

## 구조 변화 요약

| 기존 도메인 SaaS | 에이전트 기반 도메인 소프트웨어 |
| --- | --- |
| 고정된 메뉴와 화면 | 대화형 의도 입력 |
| 모든 사용자가 같은 워크플로우 | 상황별 동적 워크플로우 |
| 코드에 고정된 예외 처리 | 스킬과 정책을 통한 문맥적 처리 |
| 사용자가 기능을 찾아 실행 | 에이전트가 기능을 찾아 조합 |
| 화면별로 분절된 작업 | 목표 중심의 여러 단계 실행 |
| 정해진 리포트 | 요청에 따라 생성되는 분석과 UI |
| 사람이 시스템을 조작 | 사람이 목표를 주고 에이전트가 시스템을 조작 |
| 실행 도구 | 감사 가능한 업무 오퍼레이터 |

## 앞선 논의와의 관계

- **도메인 하네스**: 에이전트 기반 도메인 소프트웨어를 만드는 생산 프레임워크
- **에이전트 SaaS**: 그 프레임워크를 통해 만들어진 최종 운영 소프트웨어
- **관리형 플랫폼**: 이를 제작하고 검증하고 배포하는 환경
- **System of Record**: 모든 실행이 읽고 쓰는 신뢰 가능한 상태 기반

## 한 문장으로 압축

> **도메인 SaaS는 System of Record, 하드코딩된 도메인 로직, 고정 UI의 결합에서 벗어나, 안정적인 System of Record 위에 결정론적 규칙과 비정형 스킬을 가진 에이전트가 사용자의 의도를 해석하고 필요한 UI와 워크플로우를 동적으로 구성해 업무를 실행하는 시스템으로 변한다.**
