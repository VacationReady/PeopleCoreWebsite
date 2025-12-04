"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { 
  FileText, 
  Users, 
  Calendar, 
  Settings, 
  Search, 
  Inbox,
  FolderOpen,
  Bell,
  BarChart3,
  MessageSquare,
  LucideIcon
} from "lucide-react"
import { Button } from "./button"

type EmptyStateIcon = 
  | "documents"
  | "users"
  | "calendar"
  | "settings"
  | "search"
  | "inbox"
  | "folder"
  | "notifications"
  | "analytics"
  | "messages"
  | "custom"

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon to display */
  icon?: EmptyStateIcon
  /** Custom icon component (used when icon is "custom") */
  customIcon?: LucideIcon
  /** Main title */
  title: string
  /** Description text */
  description?: string
  /** Primary action button label */
  actionLabel?: string
  /** Primary action callback */
  onAction?: () => void
  /** Secondary action button label */
  secondaryActionLabel?: string
  /** Secondary action callback */
  onSecondaryAction?: () => void
  /** Visual variant */
  variant?: "default" | "card" | "minimal" | "centered"
  /** Size variant */
  size?: "sm" | "default" | "lg"
}

const iconMap: Record<Exclude<EmptyStateIcon, "custom">, LucideIcon> = {
  documents: FileText,
  users: Users,
  calendar: Calendar,
  settings: Settings,
  search: Search,
  inbox: Inbox,
  folder: FolderOpen,
  notifications: Bell,
  analytics: BarChart3,
  messages: MessageSquare,
}

const sizeStyles = {
  sm: {
    icon: "w-10 h-10",
    iconContainer: "w-16 h-16",
    title: "text-base",
    description: "text-sm",
    padding: "p-6",
  },
  default: {
    icon: "w-12 h-12",
    iconContainer: "w-20 h-20",
    title: "text-lg",
    description: "text-sm",
    padding: "p-8",
  },
  lg: {
    icon: "w-16 h-16",
    iconContainer: "w-24 h-24",
    title: "text-xl",
    description: "text-base",
    padding: "p-12",
  },
}

const variantStyles = {
  default: "bg-slate-50 dark:bg-slate-900/50 border border-border rounded-xl",
  card: "bg-card border border-border rounded-xl shadow-sm",
  minimal: "bg-transparent",
  centered: "bg-slate-50 dark:bg-slate-900/50 border border-border rounded-xl min-h-[400px] flex items-center",
}

function EmptyState({
  className,
  icon = "folder",
  customIcon,
  title,
  description,
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  variant = "default",
  size = "default",
  ...props
}: EmptyStateProps) {
  const IconComponent = icon === "custom" && customIcon ? customIcon : iconMap[icon as Exclude<EmptyStateIcon, "custom">]
  const styles = sizeStyles[size]
  
  return (
    <div
      className={cn(
        variantStyles[variant],
        styles.padding,
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
        {/* Icon */}
        <div className={cn(
          "rounded-2xl bg-muted flex items-center justify-center mb-4",
          styles.iconContainer
        )}>
          <IconComponent className={cn("text-muted-foreground", styles.icon)} />
        </div>
        
        {/* Title */}
        <h3 className={cn("font-semibold text-foreground mb-2", styles.title)}>
          {title}
        </h3>
        
        {/* Description */}
        {description && (
          <p className={cn("text-muted-foreground mb-6", styles.description)}>
            {description}
          </p>
        )}
        
        {/* Actions */}
        {(actionLabel || secondaryActionLabel) && (
          <div className="flex flex-col sm:flex-row gap-3">
            {actionLabel && onAction && (
              <Button onClick={onAction} variant="gradient">
                {actionLabel}
              </Button>
            )}
            {secondaryActionLabel && onSecondaryAction && (
              <Button onClick={onSecondaryAction} variant="outline">
                {secondaryActionLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Pre-built empty states for common scenarios
function NoResultsEmptyState({ 
  searchQuery,
  onClearSearch,
  ...props 
}: Omit<EmptyStateProps, "icon" | "title" | "description" | "actionLabel" | "onAction"> & {
  searchQuery?: string
  onClearSearch?: () => void
}) {
  return (
    <EmptyState
      icon="search"
      title="No results found"
      description={searchQuery 
        ? `We couldn't find anything matching "${searchQuery}". Try adjusting your search or filters.`
        : "We couldn't find any matching results. Try adjusting your search or filters."
      }
      actionLabel={onClearSearch ? "Clear search" : undefined}
      onAction={onClearSearch}
      {...props}
    />
  )
}

function NoDataEmptyState({
  dataType = "items",
  onAdd,
  ...props
}: Omit<EmptyStateProps, "icon" | "title" | "description" | "actionLabel" | "onAction"> & {
  dataType?: string
  onAdd?: () => void
}) {
  return (
    <EmptyState
      icon="folder"
      title={`No ${dataType} yet`}
      description={`Get started by creating your first ${dataType.slice(0, -1) || dataType}.`}
      actionLabel={onAdd ? `Add ${dataType.slice(0, -1) || dataType}` : undefined}
      onAction={onAdd}
      {...props}
    />
  )
}

function ComingSoonEmptyState({
  featureName = "Feature",
  ...props
}: Omit<EmptyStateProps, "icon" | "title" | "description"> & {
  featureName?: string
}) {
  return (
    <EmptyState
      icon="settings"
      title="Coming Soon"
      description={`${featureName} is currently under development. Check back soon for updates!`}
      variant="card"
      {...props}
    />
  )
}

function ErrorEmptyState({
  message = "Something went wrong",
  onRetry,
  ...props
}: Omit<EmptyStateProps, "icon" | "title" | "description" | "actionLabel" | "onAction"> & {
  message?: string
  onRetry?: () => void
}) {
  return (
    <EmptyState
      icon="inbox"
      title="Oops!"
      description={message}
      actionLabel={onRetry ? "Try again" : undefined}
      onAction={onRetry}
      variant="card"
      {...props}
    />
  )
}

export { 
  EmptyState,
  NoResultsEmptyState,
  NoDataEmptyState,
  ComingSoonEmptyState,
  ErrorEmptyState
}







