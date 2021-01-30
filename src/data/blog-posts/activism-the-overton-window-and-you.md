---
type: blog-posts
number: 4
readingTime: '15 min'
publishDate: 'Jan 24, 2021'
title: What virtualized lists can tell us about political extremism
tagline: A metaphor for our political climate hiding in your social media timeline
image: '../images/nicola-pavan-5gAfprVl4t8-unsplash.jpg'
imageAttribution: <span>Photo by <a href="https://unsplash.com/@pavan_nicola?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nicola Pavan</a> on <a href="https://unsplash.com/s/photos/window?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
excerpt: ...in March, we could maintain the status quo no more... since that bizarre Monday of getting our workstations setup in basements, play rooms and kitchens, our team has stayed fully remote...
---

## The Current Viewport

Have you ever worked with a virtualized list? They feature pretty frequently in front-end development work, because they are _everywhere_. If you clicked on my blog link from Twitter, you were almost certainly using a virtualized list. In the developer space, if you've worked with or studied React Native, you may have encountered the `<VirtualizedList />` component (or more likely, `<FlatList />` and `<SectionList />`, which are both based on it.) "Algorithmically equivalent" examples from iOS and Android are the `UITableView` in iOS and `RecyclerView`, respectively.

A virtualized list is a software engineering term for a list of content (tweets, for instance) where only a certain subset of content (such as the tweets you're scrolling past at the moment) are "rendered". A lot of work goes into actually making a tweet show up on your screen. To save resources (and in so doing prevent your twitter app from being so slow that you throw your phone across the room), a virtualized list only does that hard work on the "window" of content around where you're currently scrolling. It looks sort of like this:

> (unrendered tweet 1)  
(unrendered tweet 2)  
(unrendered tweet 3)  
----------------- top of virtualization window --  
_pre-rendered tweet 4_  
_pre-rendered tweet 5_  
----------------- top of screen --  
__visible tweet 6__  
__visible tweet 7__  
----------------- bottom of screen --  
_pre-rendered tweet 8_  
_pre-rendered tweet 9_  
----------------- bottom of virtualization window --  
(unrendered tweet 10)  
(unrendered tweet 11)  
(unrendered tweet 12)  

Ultimately, the contents of your tweets falls into three categories: The tweets visible on your screen, the tweets that aren't visible but are _rendered_ and ready to go, and finally the _unrendered_ tweets. As you scroll through your timeline, previously rendered tweets are unrendered, freeing up resources. The algorithm also makes "filling in" content a priority, ensuring a smooth experience as you scroll, avoiding "blank" content as the items are rendered. _(Note: this part of the algorithm becomes very important later.)_ As you scroll, the list content shown above updates to look like this:

> (unrendered tweet 1)  
(unrendered tweet 2)  
(unrendered tweet 3)  
(unrendered tweet 4)  
(unrendered tweet 5)  
----------------- top of virtualization window --  
_pre-rendered tweet 6_  
----------------- top of screen --  
__visible tweet 7__  
__visible tweet 8__  
----------------- bottom of screen --  
_pre-rendered tweet 9_  
_pre-rendered tweet 10_  
_pre-rendered tweet 11_  
----------------- bottom of virtualization window --  
(unrendered tweet 12) 

Since you've started scrolling down, the algorithm has begun filling in content in that direction, including more aggressively "teeing up" pre-rendered tweets. This ensures a smooth scrolling experience. The algorithm keeps doing invisible work just out of view, moving you steadily down the list.

## The Political Virtualization Algorithm

Now imagine that the content we were scrolling through wasn't a list of tweets.

> (unrendered "The 2020 Presidential Election was completely free and fair, Biden won without question.")  
(unrendered "The 2020 Presidential Election had some problems, but Biden won comfortably.")  
(unrendered "The 2020 Presidential Election had many problems, and Biden won, but unfairly.")  
(unrendered "The 2020 Presidential Election had severe problems, and Biden did not actually win.")  
(unrendered "The 2020 Presidential Election was stolen, but there is nothing to be done.")  
----------------- top of virtualization window --  
_pre-rendered "The 2020 Presidential Election was stolen, and we should question the results privately."_  
----------------- top of screen --  
__visible "The 2020 Presidential Election was stolen, and we should question the results publicly."__  
__visible "The 2020 Presidential Election was stolen, and we should protest the results."__  
----------------- bottom of screen --  
_pre-rendered "The 2020 Presidential Election was stolen, and we should protest the results violently but non-lethally."_  
_pre-rendered "The 2020 Presidential Election was stolen, and we should protest the results violently and lethally."_  
_pre-rendered "The 2020 Presidential Election was stolen, and we should use lethal violence to force the government to overturn the result."_  
----------------- bottom of virtualization window --  
(unrendered "The 2020 Presidential Election was stolen, and we should use lethal violence to take control of the government.")

In this case, the "content" we are scrolling through is a range of political beliefs, 