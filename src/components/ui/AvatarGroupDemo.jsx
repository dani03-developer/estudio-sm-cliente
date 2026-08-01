import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/Avatar';
import {
  AvatarGroup,
  AvatarGroupTooltip,
  AvatarGroupTooltipArrow,
} from '@/lib/animate/avatar-group';
import { motion } from 'motion/react';
import OurTeamList from '../../mock/OurTeamList';

export const AvatarGroupDemo = () => {
  return (
    <AvatarGroup className="h-12 -space-x-3" invertOverlap>
      {OurTeamList.map((avatar, index) => (
        <Avatar key={index} className="size-12 border-3 border-background">
          <AvatarImage src={avatar.avatar} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
          <AvatarGroupTooltip className="bg-primary px-3 py-1.5 text-sm text-primary-foreground">
            <AvatarGroupTooltipArrow className="fill-primary size-2.5" />
            <motion.p layout="preserve-aspect">{avatar.tooltip}</motion.p>
          </AvatarGroupTooltip>
        </Avatar>
      ))}
    </AvatarGroup>
  );
};