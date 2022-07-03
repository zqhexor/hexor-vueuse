<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/41619463?v=4',
    name: 'Hexor Zeng',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/zqhexor' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
